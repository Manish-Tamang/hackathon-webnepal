import type { Lesson } from "../../types";

export const contentModels: Lesson = {
  title: "HTML Content Models",
  description: "Understand HTML5 content categories and their usage",
  content: `
# HTML Content Models

HTML5 organizes elements into content categories to define their purpose and behavior.

## Main Categories

- **Metadata**: Elements like \`<meta>\`, \`<title>\` (in \`<head>\`)
- **Flow**: Most elements that can appear in \`<body>\` (e.g., \`<p>\`, \`<div>\`)
- **Sectioning**: Elements like \`<article>\`, \`<section>\`
- **Phrasing**: Text-level elements like \`<span>\`, \`<strong>\`

\`\`\`html
<section>
  <p>This is flow and phrasing content.</p>
</section>
\`\`\`

## Your Task

Create a webpage with:
1. A \`<section>\` containing a heading
2. A paragraph with a \`<span>\` for emphasized text
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Content Models</title>
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
    <title>Content Models</title>
  </head>
  <body>
    <section>
      <h1>About Content</h1>
      <p>This is a <span>special</span> paragraph.</p>
    </section>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "document-structure",
  },
  nextLesson: {
    topic: "html",
    subtopic: "heading-elements",
  },
};
