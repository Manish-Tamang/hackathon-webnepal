import type { Lesson } from "../../types"

export const elementsAdvanced: Lesson = {
  title: "Advanced HTML Elements",
  description: "Learn about more complex HTML elements and semantic markup",
  content: `
# Advanced HTML Elements

Beyond the basic elements, HTML offers a variety of semantic elements that help define the structure and meaning of your content.

## Semantic HTML Elements

### Article

The \`<article>\` element represents a self-contained composition in a document, which is intended to be independently distributable or reusable.

\`\`\`html
<article>
  <h2>Article Title</h2>
  <p>Article content goes here...</p>
</article>
\`\`\`

### Section

The \`<section>\` element represents a standalone section of a document, which doesn't have a more specific semantic element to represent it.

\`\`\`html
<section>
  <h2>Section Heading</h2>
  <p>Section content...</p>
</section>
\`\`\`

### Nav

The \`<nav>\` element represents a section of a page whose purpose is to provide navigation links.

\`\`\`html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
\`\`\`

### Figure and Figcaption

The \`<figure>\` element represents self-contained content, potentially with a caption, which is specified using the \`<figcaption>\` element.

\`\`\`html
<figure>
  <img src="image.jpg" alt="Description">
  <figcaption>Caption for the image</figcaption>
</figure>
\`\`\`

## Your Task

Create a semantic HTML page for a blog post that includes:
1. A header with a nav section
2. An article with a heading, paragraphs, and a figure with caption
3. A section for related posts
4. A footer with copyright information
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>My Blog Post</title>
  </head>
  <body>
    <!-- Write your semantic HTML here -->
    
  </body>
</html>`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>My Blog Post</title>
  </head>
  <body>
    <header>
      <h1>My Web Development Blog</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <article>
        <h2>Understanding Semantic HTML</h2>
        <p>Semantic HTML introduces meaning to the web page rather than just presentation. For example, a &lt;p&gt; tag indicates that the enclosed text is a paragraph.</p>
        
        <p>Using semantic HTML is beneficial for accessibility, SEO, and maintainability.</p>
        
        <figure>
          <img src="/placeholder.svg?height=300&width=500" alt="Semantic HTML diagram">
          <figcaption>Fig.1 - Visualization of semantic HTML structure</figcaption>
        </figure>
        
        <p>By using the right elements for the right purpose, we create a better experience for all users.</p>
      </article>
      
      <section>
        <h3>Related Posts</h3>
        <ul>
          <li><a href="#">Getting Started with CSS Grid</a></li>
          <li><a href="#">JavaScript Fundamentals</a></li>
          <li><a href="#">Responsive Design Principles</a></li>
        </ul>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2023 My Web Development Blog. All rights reserved.</p>
    </footer>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "elements-basic",
  },
  nextLesson: {
    topic: "css",
    subtopic: "selectors",
  },
}
