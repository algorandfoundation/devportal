// .github/scripts/claude-review.js
import Anthropic from '@anthropic-ai/sdk';
import { Octokit } from 'octokit';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// Review criteria prompt - customize this for your needs
const REVIEW_PROMPT = `
You are a technical documentation reviewer for a developer portal. Please review the following markdown content and provide feedback based on these criteria:

**Content Quality:**
- Grammar and spelling accuracy
- Clarity and readability
- Technical accuracy
- Completeness of information

**Structure & Format:**
- Proper heading hierarchy (H1 → H2 → H3)
- Consistent use of code blocks with appropriate language tags
- Proper list formatting and nesting
- Effective use of callouts/admonitions

**Style & Voice:**
- Consistent tone (professional but approachable)
- Active voice where appropriate
- Clear, concise language
- Avoid jargon without explanation

**Documentation Standards:**
- Code examples are complete and runnable
- API references include all required parameters
- Links are properly formatted and descriptive
- Images have alt text when present

**Link Quality:**
- Links use proper markdown syntax [text](url)
- Link text is descriptive (avoid "click here", "read more")
- URLs are complete with proper protocols (https://)
- Internal links use relative paths consistently
- No malformed or incomplete URLs
- External links point to reputable sources
- Note: I cannot test if links actually work, only check formatting

**Format your response as follows:**
- If the content looks good overall, start with "✅ **Overall Assessment: Approved**"
- If there are issues to address, start with "⚠️ **Overall Assessment: Needs Revision**"
- Then provide specific, actionable feedback organized by section
- Use line numbers when referencing specific issues
- Be constructive and helpful in your suggestions

Please review this markdown content:
`;

const MAX_FILE_SIZE = 50000; // 50KB limit
const RATE_LIMIT_DELAY = 1000; // 1 second between API calls

/**
 * Reviews markdown content using Claude API
 * @param {string} content - The markdown content to review
 * @param {string} filename - Name of the file being reviewed
 * @returns {Promise<string>} The review feedback
 */
async function reviewWithClaude(content, filename) {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: `${REVIEW_PROMPT}\n\n## File: ${filename}\n\n\`\`\`markdown\n${content}\n\`\`\``,
        },
      ],
    });

    return response.content[0].text;
  } catch (error) {
    console.error(`Error calling Claude API for ${filename}:`, error);
    return `❌ **Error**: Unable to review ${filename} - API call failed`;
  }
}

/**
 * Posts a review comment to the GitHub PR
 * @param {string} owner - Repository owner
 * @param {string} repo - Repository name
 * @param {number} prNumber - Pull request number
 * @param {string} filename - Name of the reviewed file
 * @param {string} review - The review content
 */
async function postReviewComment(owner, repo, prNumber, filename, review) {
  const commentBody = `## 🤖 Claude Documentation Review - \`${filename}\`\n\n${review}`;

  try {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: prNumber,
      body: commentBody,
    });
    console.log(`✅ Posted review comment for ${filename}`);
  } catch (error) {
    console.error(`❌ Error posting comment for ${filename}:`, error);
  }
}

/**
 * Gets GitHub context from environment variables
 * @returns {Object} GitHub context object
 */
function getGitHubContext() {
  // Handle GitHub Actions environment
  if (process.env.GITHUB_ACTIONS) {
    const repository = process.env.GITHUB_REPOSITORY;
    if (!repository) {
      throw new Error('GITHUB_REPOSITORY environment variable not found');
    }

    const [owner, repo] = repository.split('/');
    const prNumber = process.env.GITHUB_REF?.match(
      /refs\/pull\/(\d+)\/merge/,
    )?.[1];

    if (!prNumber) {
      throw new Error('Could not extract PR number from GITHUB_REF');
    }

    return {
      owner,
      repo,
      prNumber: parseInt(prNumber, 10),
    };
  }

  // Fallback for local testing or other environments
  const context = JSON.parse(process.env.GITHUB_CONTEXT || '{}');
  const { owner, repo } = context.repo || {};
  const prNumber = context.payload?.pull_request?.number;

  if (!owner || !repo || !prNumber) {
    throw new Error('Missing GitHub context information');
  }

  return { owner, repo, prNumber };
}

/**
 * Gets list of changed markdown files
 * @returns {string[]} Array of file paths
 */
function getChangedFiles() {
  const changedFiles = process.env.CHANGED_FILES || process.argv[2] || '';
  return changedFiles
    .split(' ')
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .filter(Boolean);
}

/**
 * Validates and reads file content
 * @param {string} filePath - Path to the file
 * @returns {string|null} File content or null if invalid
 */
function readFileContent(filePath) {
  if (!existsSync(filePath)) {
    console.log(`⚠️  File ${filePath} not found, skipping...`);
    return null;
  }

  try {
    const content = readFileSync(filePath, 'utf8');

    if (content.length > MAX_FILE_SIZE) {
      console.log(
        `⚠️  File ${filePath} is too large (${content.length} chars), skipping...`,
      );
      return null;
    }

    return content;
  } catch (error) {
    console.error(`❌ Error reading ${filePath}:`, error);
    return null;
  }
}

/**
 * Adds delay for rate limiting
 * @param {number} ms - Milliseconds to delay
 */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Main execution function
 */
async function main() {
  try {
    const { owner, repo, prNumber } = getGitHubContext();
    const fileList = getChangedFiles();

    if (fileList.length === 0) {
      console.log('ℹ️  No markdown files to review');
      return;
    }

    console.log(`🔍 Reviewing ${fileList.length} markdown files...`);

    // Review each file
    for (const file of fileList) {
      const content = readFileContent(file);
      if (!content) continue;

      try {
        console.log(`📝 Reviewing ${file}...`);
        const review = await reviewWithClaude(content, file);
        await postReviewComment(owner, repo, prNumber, file, review);

        // Add delay to respect rate limits
        await delay(RATE_LIMIT_DELAY);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
      }
    }

    console.log('✅ Review process completed');
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run the main function if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('❌ Unhandled error:', error);
    process.exit(1);
  });
}
