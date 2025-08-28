import type { Lesson } from "../../types";

export const headings: Lesson = {
  title: "Heading Elements and HTML5 Semantic Comments",
  description: "Learn about heading elements and semantic comments in HTML5",
  content: `
# Heading Elements and HTML5 Semantic Comments

Headings structure content, and semantic comments improve code clarity.

## Headings

HTML provides six heading levels: \`<h1>\` (most important) to \`<h6>\`.

\`\`\`html
<h1>Main Heading</h1>
<h2>Subheading</h2>
\`\`\`

## Semantic Comments

HTML5 semantic elements like \`<header>\` and comments clarify structure.

\`\`\`html
<!-- Main content section -->
<header>
  <h1>Welcome</h1>
</header>
\`\`\`

## Your Task

Create a webpage with:
1. A \`<header>\` with an \`<h1>\` and a comment
2. An \`<h2>\` for a subsection
3. A paragraph below the \`<h2>\`
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Headings</title>
  </head>
  <body>
    <!-- Write your code here -->
  </body>
</html>`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Headings</title>
  </head>
  <body>
    <!-- Site header -->
    <header>
      <h1>Main Topic</h1>
    </header>
    <h2>Details</h2>
    <p>This is a detailed description.</p>
  </body>
</html>`,
  },
  expectedOutput: "Main Topic",
  prevLesson: {
    topic: "html",
    subtopic: "content-models",
  },
  nextLesson: {
    topic: "html",
    subtopic: "html-lists",
  },
};
