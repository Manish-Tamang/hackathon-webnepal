import type { Lesson } from "../../types";

export const links: Lesson = {
  title: "Creating Hyperlinks",
  description: "Learn how to create internal and external hyperlinks",
  content: `
# Creating Hyperlinks

The \`<a>\` tag creates hyperlinks to other pages or sections.

## Attributes

- **href**: Specifies the URL or anchor
- **target**: Defines where the link opens (e.g., \`_blank\` for new tab)

\`\`\`html
<a href="https://example.com">Visit Example</a>
<a href="#section">Jump to Section</a>
\`\`\`

## Your Task

Create a webpage with:
1. An external link to a website (e.g., https://example.com)
2. An internal link to a section with an \`id\` attribute
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Hyperlinks</title>
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
    <title>Hyperlinks</title>
  </head>
  <body>
    <p><a href="https://example.com" target="_blank">Visit Example</a></p>
    <p><a href="#about">Go to About</a></p>
    <section id="about">
      <h1>About</h1>
      <p>This is the about section.</p>
    </section>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "character-entities",
  },
  nextLesson: {
    topic: "html",
    subtopic: "html-images",
  },
};
