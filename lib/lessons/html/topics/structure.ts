import type { Lesson } from "../../types";

export const structure: Lesson = {
  title: "Basic HTML Document Structure",
  description: "Learn the essential structure of an HTML document",
  content: `
# Basic HTML Document Structure

Every HTML document follows a standard structure to ensure proper rendering.

## Key Elements

- **\<!DOCTYPE html\>**: Declares the document as HTML5
- **\<html\>**: Root element
- **\<head\>**: Contains metadata (e.g., \<title\>, \<meta\>)
- **\<body\>**: Contains visible content

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>
\`\`\`

## Your Task

Create a complete HTML document with:
1. A DOCTYPE declaration
2. An HTML element with \`lang="en"\`
3. A meta charset tag
4. A title "My Webpage"
5. A heading in the body saying "My Webpage"
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <!-- Write your code here -->
  </head>
  <body>
  </body>
</html>`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Webpage</title>
  </head>
  <body>
    <h1>My Webpage</h1>
  </body>
</html>`,
  },
  expectedOutput: "My Webpage",
  prevLesson: {
    topic: "html",
    subtopic: "anatomy-tag",
  },
  nextLesson: {
    topic: "html",
    subtopic: "content-models",
  },
};
