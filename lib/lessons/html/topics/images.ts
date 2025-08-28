import type { Lesson } from "../../types";

export const images: Lesson = {
  title: "Displaying Images",
  description: "Learn how to embed images in HTML",
  content: `
# Displaying Images

The \`<img>\` tag embeds images in a webpage.

## Attributes

- **src**: Image URL or path
- **alt**: Alternative text for accessibility
- **width**/**height**: Dimensions (optional)

\`\`\`html
<img src="photo.jpg" alt="Description" width="300">
\`\`\`

## Your Task

Create a webpage with:
1. An image with a placeholder URL
2. An appropriate \`alt\` attribute
3. A paragraph describing the image
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Images</title>
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
    <title>Images</title>
  </head>
  <body>
    <img src="/placeholder.svg?height=200&width=300" alt="Nature landscape" width="300">
    <p>This image shows a beautiful nature landscape.</p>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "html-links",
  },
  nextLesson: {
    topic: "html",
    subtopic: "html-forms",
  },
};
