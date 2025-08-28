import type { Lesson } from "../../types";

export const semantics: Lesson = {
  title: "HTML5 Semantic Elements",
  description: "Learn how to use HTML5 semantic elements for better structure",
  content: `
# HTML5 Semantic Elements

Semantic elements clearly describe their meaning to browsers and developers.

## Key Elements

- **\<header\>**: Introductory content
- **\<nav\>**: Navigation links
- **\<main\>**: Main content
- **\<article\>**: Self-contained content
- **\<aside\>**: Supplementary content

\`\`\`html
<header>
  <nav>
    <a href="#home">Home</a>
  </nav>
</header>
<main>
  <article>Content</article>
</main>
\`\`\`

## Your Task

Create a blog page with:
1. A \`<header>\` with a \`<nav>\` containing one link
2. A \`<main>\` with an \`<article>\` containing a heading and paragraph
3. An \`<aside>\` with a short note
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Semantic Elements</title>
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
    <title>Semantic Elements</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="#home">Home</a>
      </nav>
    </header>
    <main>
      <article>
       		<h1>Blog Post</h1>
        <p>This is a blog post content.</p>
      </article>
    </main>
    <aside>
      <p>Additional info here.</p>
    </aside>
  </body>
</html>`,
  },
  expectedOutput: "Blog Post",
  prevLesson: {
    topic: "html",
    subtopic: "html-tables",
  },
  nextLesson: {
    topic: "css",
    subtopic: "selectors",
  },
};
