import type { Lesson } from "../../types";

export const entities: Lesson = {
  title: "HTML Character Entity References",
  description: "Learn how to use character entities for special characters",
  content: `
# HTML Character Entity References

Character entities allow you to display special characters in HTML.

## Common Entities

- **&** (\`&amp;\` or \`&#38;\`)
- **<** (\`&lt;\` or \`&#60;\`)
- **©** (\`&copy;\` or \`&#169;\`)

\`\`\`html
<p>Copyright &copy; 2025</p>
<p>Use &lt;code&gt; for code</p>
\`\`\`

## Your Task

Create a webpage with:
1. A paragraph showing a copyright notice with \`<copy;\>
2. A paragraph with the text "HTML <code>" using \`<lt;\>
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Character Entities</title>
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
    <title>Character Entities</title>
  </head>
  <body>
    <p>Copyright &copy; 2025 My Website</p>
    <p>HTML &lt;code&gt; tags are useful</p>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "html-lists",
  },
  nextLesson: {
    topic: "html",
    subtopic: "html-links",
  },
};
