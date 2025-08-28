import type { Lesson } from "../../types"

export const introduction: Lesson = {
  title: "Introduction to HTML",
  description: "Learn the basics of HTML and its structure",
  content: `
# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display the content.

## History of HTML

HTML has evolved significantly since its creation. Understanding its history helps appreciate modern web development.

### Key Milestones

- **HTML 1.0 (1990)**: Created by Tim Berners-Lee, the first version introduced basic tags like \`<p>\` and \`<h1>\`.
- **HTML 4.01 (1999)**: Standardized many features, including tables and forms.
- **HTML5 (2014)**: Introduced semantic elements (\`<article>\`, \`<section>\`), multimedia support (\`<video>\`, \`<audio>\`), and APIs.

## Course Overview

In this course, you will learn:
1. Basic HTML document structure
2. HTML elements and their anatomy
3. Content models and semantic elements
4. Working with text, links, images, and more

## Getting Started

Let's begin with a simple HTML document:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
\`\`\`

## Your Task

Create a basic HTML page with:
1. A main heading (h1) with the text "Hello, Web Nepal!"
2. A paragraph (p) with a brief introduction about yourself
3. A second heading (h2) with the text "My Goals"
4. A list (ul) with at least three learning goals
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
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
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, Web Nepal!</h1>
    <p>My name is John and I'm learning web development. I'm excited to build amazing websites!</p>
    
    <h2>My Goals</h2>
    <ul>
      <li>Learn HTML fundamentals</li>
      <li>Master CSS styling</li>
      <li>Build interactive websites with JavaScript</li>
      <li>Create responsive designs for all devices</li>
    </ul>
  </body>
</html>`,
  },
  expectedOutput: "Hello, Web Nepal!",
  nextLesson: {
    topic: "html",
    subtopic: "anatomy-tag"
  }
}
