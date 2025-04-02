import fs from 'fs/promises';
import { URL } from 'url';

export async function getSelectedCode(
  src: string,
  snippet: string | undefined,
): Promise<string> {
  const code = await getCode(src);

  if (!snippet) {
    return code;
  }

  const pattern = `^ *(//|#) example: ${snippet}$`;
  const regex = new RegExp(pattern, 'g');
  const codeLines = code.split('\n');

  const occurrenceIndexes = codeLines.reduce<number[]>(
    (indexes, line, index) => {
      if (regex.test(line)) {
        indexes.push(index);
      }
      return indexes;
    },
    [],
  );

  if (occurrenceIndexes.length !== 2) {
    throw new Error(
      `Error: Pattern "${pattern}" must occur exactly twice. Found: ${occurrenceIndexes.length}`,
    );
  }

  const [startIndex, endIndex] = occurrenceIndexes;
  return codeLines.slice(startIndex + 1, endIndex).join('\n');
}

async function getCode(src: string): Promise<string> {
  try {
    new URL(src);
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    if (error instanceof TypeError) {
      try {
        return await fs.readFile(src, 'utf-8');
      } catch (fsError) {
        if (fsError instanceof Error) {
          throw new Error(`Error reading file: ${fsError.message}`);
        }
        throw new Error(`Unknown error reading file: ${fsError}`);
      }
    } else {
      throw new Error(`RemoteCode retrieval failed: ${error}`);
    }
  }
}

/**
 * Converts a raw GitHub URL to a standard GitHub URL.
 * @param {string} rawUrl - The raw GitHub URL to convert.
 * @returns {string | null} - The converted GitHub URL or null if the input is invalid.
 */
export function convertRawToGitHubUrl(rawUrl: string): URL | string {
  // Create a URL object to parse the input
  const url = new URL(rawUrl);

  // Check if this is a raw.githubusercontent.com URL
  if (url.hostname !== 'raw.githubusercontent.com') {
    throw new Error('Not a valid raw.githubusercontent.com URL');
  }

  // Split the pathname into segments
  const segments = url.pathname.split('/').filter(segment => segment !== '');

  // We need at least username, repository, and branch
  if (segments.length < 3) {
    throw new Error('URL does not contain the required components');
  }

  // Extract the username, repository, and branch
  const username = segments[0];
  const repository = segments[1];
  const branch = segments[2];

  // Get the file path (everything after the branch)
  const filePath = segments.slice(3).join('/');

  // Construct the regular GitHub URL
  const githubUrlString = `https://github.com/${username}/${repository}/blob/${branch}/${filePath}`;

  // Return as URL object
  return new URL(githubUrlString);
}
