import type { Lesson } from "../../types";

export const lists: Lesson = {
  title: "Lists in HTML",
  description: "Learn how to create ordered and unordered lists",
  content: `
# Lists in HTML

HTML supports different types of lists to organize content.

## Types of Lists

- **Unordered List (\`<ul>\`)**: Bullet points
- **Ordered List (\`<ol>\`)**: Numbered items
- **Description List (\`<dl>\`)**: Terms and descriptions

\`\`\`html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
\`\`\`

## Your Task

Create a webpage with:
1. An ordered list of three steps to learn HTML
2. An unordered list of three HTML tags you've learned
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Lists</title>
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
    <title>Lists</title>
  </head>
  <body>
    <h1>Learning HTML</h1>
    <ol>
      <li>Study basic tags</li>
      <li>Practice building pages</li>
      <li>Explore semantic elements</li>
    </ol>
    <h2>Known Tags</h2>
    <ul>
      <li>p</li>
      <li>h1</li>
      <li>ul</li>
    </ul>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "heading-elements",
  },
  nextLesson: {
    topic: "html",
    subtopic: "character-entities",
  },
};
