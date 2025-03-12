import { FileTransformer } from './types';

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
    return content.replaceAll(/\.\.\/\.\.\/cli\/index/g, '/reference/algokit-cli/reference');
};

const removeLine = (line: string): FileTransformer => {
    return (content: string): string => {
        return content.replaceAll(line, '');
    }
};

const changeFromTo = (from: string, to: string): FileTransformer => {
    return (content: string): string => {
        return content.replaceAll(from, to);
    }
}

const changeFromToRegExp = (from: RegExp, to: string): FileTransformer => {
    return (content: string): string => {
        return content.replaceAll(from, to);
    }
}

const removeToc: FileTransformer = (content: string): string => {
    return content.replaceAll(/^ *- \[.+$/gm, '');
}

const removeTitleBackticks: FileTransformer = (content: string): string => {
    return content.replaceAll(/title: `(.+)`/g, 'title: $1');
}

const replaceTitleColon: FileTransformer = (content: string): string => {
    return content.replace(/title: (.+):(.*)/g, 'title: $1 -$2');
}

const lowercaseInternalLinks: FileTransformer = (content: string): string => {
    return content.replace(/\]\(#(.+?)\)/g, (match, p1) => {
        return `](#${p1.toLowerCase()})`;
    });
}

export {
    convertH1ToFrontmatter,
    correctTypo,
    stripLinkExtensions,
    changeFeatureLinks,
    changeReferenceLinks,
    removeLine,
    changeFromTo,
    removeToc,
    removeTitleBackticks,
    replaceTitleColon,
    lowercaseInternalLinks,
    changeFromToRegExp,
};