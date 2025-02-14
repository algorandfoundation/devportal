import { readFile, writeFile, readdir, mkdir, rm, cp, mkdtemp } from 'fs/promises';
import path from 'path';

type FileTransformer = (content: string) => string;

interface DirectoryTransformation {
    src: string;
    transformations: FileTransformer[];
    dest: string;
}

interface FileTransformation {
    src: string;
    transformations: FileTransformer[];
    dest: string;
}

const convertH1ToFrontmatter: FileTransformer = (content: string) => {
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (!h1Match) return content;

    const title = h1Match[1].trim();
    const newContent = content.replace(/^#\s+.+$/m, '').trim();

    return `---
title: ${title}
---

${newContent}`;
};

const correctTypo: FileTransformer = (content: string): string => {
    return content
        .replaceAll('immedately', 'immediately')
        .replaceAll('lastest', 'latest')
        .replaceAll('directy', 'directly');
}


const stripLinkExtensions: FileTransformer = (content: string): string => {
    return content.replaceAll('.md', '');
};
const changeFeatureLinks: FileTransformer = (content: string): string => {
    return content.replaceAll('/features', '');
};

const changeReferenceLinks: FileTransformer = (content: string): string => {
    return content.replaceAll(/\.\.?\/cli\/index/g, 'cli-reference');
};

const removeLine = (line: string): FileTransformer => {
    return (content: string): string => {
        return content.replaceAll(line, '');
    }
};

const removeToc: FileTransformer = (content: string): string => {
    return content.replaceAll(/^ *- \[.+$/gm, '');
}

async function getAllFiles(directory: string, filePattern: string): Promise<string[]> {
    const files: string[] = [];

    async function scan(dir: string) {
        const entries = await readdir(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                await scan(fullPath);
            } else if (entry.isFile() && entry.name.match(filePattern)) {
                files.push(fullPath);
            }
        }
    }

    await scan(directory);
    return files;
}

async function processDirectories(configs: DirectoryTransformation[]) {
    try {
        for (const config of configs) {
            const tempDir = await mkdtemp('.tmp');

            await cp(config.src, tempDir, { recursive: true });
            const files = await getAllFiles(tempDir, '\\.md$');

            for (const file of files) {
                const content = await readFile(file, 'utf-8');
                const transformedContent = config.transformations.reduce(
                    (currentContent, transform) => transform(currentContent),
                    content
                );
                await writeFile(file, transformedContent, 'utf-8');
            }

            await rm(config.dest, { recursive: true, force: true });
            await mkdir(config.dest, { recursive: true });
            await cp(tempDir, config.dest, { recursive: true });
            await rm(tempDir, { recursive: true, force: true });

            console.log(`Successfully processed files from ${config.src} to ${config.dest}`);
        }
    } catch (error) {
        console.error('Error processing files:', error);
    }
}

async function processFile(configs: FileTransformation[]) {
    try {
        for (const config of configs) {
            const content = await readFile(config.src, 'utf-8');
            const transformedContent = config.transformations.reduce(
                (currentContent, transform) => transform(currentContent),
                content
            );

            await mkdir(path.dirname(config.dest), { recursive: true });
            await writeFile(config.dest, transformedContent, 'utf-8');

            console.log(`Successfully processed file from ${config.src} to ${config.dest}`);
        }
    } catch (error) {
        console.error('Error processing file:', error);
    }
}

await processDirectories([
    {
        src: './../repos/algokit-cli/docs/features',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            changeFeatureLinks,
            changeReferenceLinks,
            correctTypo,
            removeLine('> For details on executing `algokit localnet` without `docker` or `podman` refer to the [codespaces](#codespaces) section.')
        ],
        dest: './../../src/content/docs/reference/algokit-cli'
    },
]);
await processFile([
    {
        src: './../repos/algokit-cli/docs/cli/index.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            changeFeatureLinks,
            changeReferenceLinks,
            removeToc,
        ],
        dest: './../../src/content/docs/reference/algokit-cli/cli-reference.md'
    },
    {
        src: './../repos/algokit-cli/docs/algokit.md',
        transformations: [
            convertH1ToFrontmatter,
            stripLinkExtensions,
            changeFeatureLinks,
            changeReferenceLinks,
        ],
        dest: './../../src/content/docs/reference/algokit-cli/overview.md'
    },
    {
        src: './../../src/content/docs/reference/algokit-cli/project.md',
        transformations: [],
        dest: './../../src/content/docs/reference/algokit-cli/project/overview.md'
    },
    {
        src: './../../src/content/docs/reference/algokit-cli/tasks.md',
        transformations: [],
        dest: './../../src/content/docs/reference/algokit-cli/tasks/overview.md'
    },
]);
