import { readFile, writeFile, readdir, mkdir, rm, cp, mkdtemp } from 'fs/promises';
import path from 'path';
import { DirectoryTransformation, FileTransformation } from './types';
import { Dirent } from 'fs';

async function getAllFiles(directory: string, suffix?: string): Promise<Dirent[]> {
    const entries = await readdir(directory, { withFileTypes: true, recursive: true });
    let files = entries.filter(entry => entry.isFile())
    if (suffix) {
        files = files.filter(entry => entry.name.endsWith(suffix))
    }
    return files;
}

async function processDirectories(configs: DirectoryTransformation[]) {
    try {
        for (const config of configs) {
            const files = await getAllFiles(config.src, '.md');

            for (const file of files) {
                if (config.pattern && !config.pattern.test(file.name)) {
                    continue
                }
                const relativePath = path.relative(config.src, path.join(file.parentPath, file.name));
                const targetPath = path.join(config.dest, relativePath);
                await mkdir(path.dirname(targetPath), { recursive: true });
                const fileTransformation = {
                    src: path.join(file.parentPath, file.name),
                    transformations: config.transformations,
                    dest: targetPath,
                }
                await processFile([fileTransformation]);
            }

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

export {
    processDirectories,
    processFile,
};