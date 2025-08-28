import type { Lesson } from "../../types"

export const elements: Lesson = {
  title: "HTML Elements",
  description: "Learn about different HTML elements and their usage",
  content: `
# HTML Elements

HTML elements are the building blocks of HTML pages. Elements are represented by tags that define different parts of a web page.

## Common HTML Elements

### Headings

HTML provides six levels of headings, from \`<h1>\` (most important) to \`<h6>\` (least important).

\`\`\`html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
\`\`\`

### Paragraphs

The \`<p>\` element defines a paragraph.

\`\`\`html
<p>This is a paragraph.</p>
\`\`\`

### Links

The \`<a>\` element defines a hyperlink.

\`\`\`html
<a href="https://www.example.com">This is a link</a>
\`\`\`

### Images

The \`<img>\` element is used to embed images.

\`\`\`html
<img src="image.jpg" alt="Description of the image">
\`\`\`

## Your Task

Create a webpage about your favorite hobby that includes:
1. A heading with the name of your hobby
2. A paragraph describing why you enjoy it
3. An image related to the hobby (use a placeholder URL)
4. A link to a website where people can learn more about this hobby
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>My Hobby</title>
  </head>
  <body>
    <!-- Write your code here -->
    
  </body>
</html>`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>My Hobby</title>
  </head>
  <body>
    <h1>Photography</h1>
    
    <p>I love photography because it allows me to capture beautiful moments and see the world from different perspectives. It's both a technical and creative pursuit that constantly challenges me to improve.</p>
    
    <img src="/placeholder.svg?height=300&width=400" alt="Photography equipment" width="400">
    
    <p>
      <a href="https://www.nationalgeographic.com/photography/">Learn more about photography at National Geographic</a>
    </p>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "introduction",
  },
  nextLesson: {
    topic: "css",
    subtopic: "selectors",
  },
}
