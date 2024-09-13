// Fetch markdown content from a given URL and optionally extract a specific section based on the heading
export async function fetchRemoteMarkdown(
  url: string | URL,
  sectionName: string,
) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch markdown from ${url}`);
  }

  const markdownContent = await response.text();

  // If no section is provided, return the entire markdown content
  if (!sectionName || sectionName.trim() === '') {
    return markdownContent;
  }

  return extractSection(markdownContent, sectionName);
}

// Function to extract a markdown section based on any heading level (e.g., #, ##, ###)
function extractSection(markdownContent: string, sectionName: string) {
  const lines = markdownContent.split('\n');
  let isInSection = false;
  const extractedLines: string[] = [];
  let sectionHeadingLevel = 0;

  const headingRegex = /^(#+)\s+(.*?)\s*$/; // Updated regex for exact match

  for (const line of lines) {
    const headingMatch = line.match(headingRegex);

    if (headingMatch) {
      const currentHeadingLevel = headingMatch[1].length; // The number of '#' characters determines the heading level
      const currentHeadingText = headingMatch[2].trim(); // The text of the heading

      // Check if this is the exact section we're looking for
      if (!isInSection && currentHeadingText === sectionName) {
        isInSection = true;
        sectionHeadingLevel = currentHeadingLevel;
        continue;
      }

      // Stop when we encounter another heading of the same or higher level
      if (isInSection && currentHeadingLevel <= sectionHeadingLevel) {
        break;
      }
    }

    // Collect lines if we're inside the section
    if (isInSection) {
      extractedLines.push(line);
    }
  }

  return extractedLines.length > 0 ? extractedLines.join('\n') : null;
}
