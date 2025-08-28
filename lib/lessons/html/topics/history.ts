// File: history.tsx
import type { Lesson } from "../../types";

export const history: Lesson = {
  title: "History of HTML",
  description: "Explore the evolution of HTML from its inception to HTML5",
  content: `
# History of HTML

HTML (HyperText Markup Language) has evolved significantly since its creation. Understanding its history helps appreciate modern web development.

## Key Milestones

- **HTML 1.0 (1990)**: Created by Tim Berners-Lee, the first version introduced basic tags like \`<p>\` and \`<h1>\`.
- **HTML 4.01 (1999)**: Standardized many features, including tables and forms.
- **HTML5 (2014)**: Introduced semantic elements (\`<article>\`, \`<section>\`), multimedia support (\`<video>\`, \`<audio>\`), and APIs.

\`\`\`html
<h1>HTML Evolution</h1>
<p>HTML5 brought semantic elements to improve accessibility.</p>
\`\`\`

## Your Task

Create a webpage that lists three HTML versions with brief descriptions:
1. A heading "HTML History"
2. An unordered list with three HTML versions (e.g., HTML 1.0, HTML 4.01, HTML5) and a short description for each
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML History</title>
  </head>
  <body>
    <h1>HTML History</h1>
    <!-- Write your code here -->
  </body>
</html>`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML History</title>
  </head>
  <body>
    <h1>HTML History</h1>
    <ul>
      <li>HTML 1.0: Introduced basic tags for text and links in 1990.</li>
      <li>HTML 4.01: Standardized tables, forms, and scripting in 1999.</li>
      <li>HTML5: Added semantic elements and multimedia support in 2014.</li>
    </ul>
  </body>
</html>`,
  },
  expectedOutput: "HTML History",
  prevLesson: {
    topic: "html",
    subtopic: "introduction"
  },
  nextLesson: {
    topic: "html",
    subtopic: "anatomy-tag"
  }
};
