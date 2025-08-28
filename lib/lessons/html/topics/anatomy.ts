import type { Lesson } from "../../types";

export const anatomy: Lesson = {
  title: "Anatomy of an HTML Tag",
  description: "Understand the structure and components of HTML tags",
  content: `
# Anatomy of an HTML Tag

HyperText Markup Language (HTML) is the standard markup language for creating web pages. The structure of an HTML document is built using HTML elements. Understanding the anatomy of these elements and their tags is fundamental to web development.

## What is an HTML Element?

An HTML element is a fundamental building block of an HTML document. It usually consists of:
- A **start tag** (or opening tag)
- Some **content**
- An **end tag** (or closing tag)

For example, \`<p>This is a paragraph.</p>\` is a paragraph element.

## Tag vs. Element: What's the Difference?

Though often used interchangeably, there's a subtle distinction:

- **Tag**: Refers to the markup syntax itself, like \`<p>\` (an opening paragraph tag) or \`</p>\` (a closing paragraph tag). Tags are the instructions.
- **Element**: Refers to the complete unit, including the opening tag, the content, and the closing tag. The element is the actual component in the document structure.

So, \`<p>\` is a tag, but \`<p>Hello world</p>\` is an element.

## Core Components of an HTML Element

Most HTML elements are structured with the following components:

\`<tagname attribute1="value1" attribute2="value2">Content</tagname>\`

Let's break this down:

### 1. Opening and Closing Tags

- **Opening Tag**: Marks the beginning of an element.
  - Syntax: \`<tagname>\` (e.g., \`<h1>\`, \`<div>\`, \`<p>\`)
  - It contains the element's name (like \`p\` for paragraph, \`a\` for anchor/link).
- **Closing Tag**: Marks the end of an element.
  - Syntax: \`</tagname>\` (e.g., \`</h1>\`, \`</div>\`, \`</p>\`)
  - It's identical to the opening tag but includes a forward slash (\`/\`) before the tag name.
- **Requirement**: Most HTML elements require both opening and closing tags to clearly define their scope and content.

### 2. Content Area

- The **Content** is everything that sits between the opening tag and the closing tag.
- This can be:
    - Plain text (e.g., "Welcome to HTML!")
    - Other HTML elements (this is called nesting)
    - A combination of both.
- Example: In the element \`<p>This is <strong>important</strong> text.</p>\`, the content is "This is <strong>important</strong> text.", which includes plain text and a nested \`<strong>\` element.

### 3. Attributes

- **Attributes** provide additional information or modify the behavior of an HTML element.
- They are **always specified in the opening tag**.
- **Format**: Attributes are written as \`name="value"\` pairs (key-value pairs).
    - The \`name\` is the attribute's identifier (e.g., \`class\`, \`id\`, \`href\`, \`src\`).
    - The \`value\` is the setting for that attribute, enclosed in quotation marks (single or double, though double is more common).
- Multiple attributes are separated by spaces.
- **Common Examples**:
    - \`href\`: (Hypertext Reference) Specifies the URL for a link (\`<a>\` tag). Example: \`<a href="https://www.example.com">\`
    - \`src\`: (Source) Specifies the path to an external resource, like an image (\`<img>\`) or script (\`<script>\`). Example: \`<img src="image.jpg">\`
    - \`alt\`: (Alternative text) Provides descriptive text for an image if it cannot be displayed. Crucial for accessibility. Example: \`<img src="logo.png" alt="Company Logo">\`
    - \`id\`: Assigns a unique identifier to an element within the page. Used for specific styling or JavaScript manipulation. Example: \`<div id="main-header">\`
    - \`class\`: Assigns one or more class names to an element. Used for applying CSS styles or selecting multiple elements with JavaScript. Example: \`<p class="intro-text featured">\`

## Void (Self-Closing) Elements

Not all elements have content and a closing tag. Some HTML elements are **void elements** (also known as empty elements or self-closing tags).
- These elements represent a singular instruction or embed content directly via attributes and do not have a content area between an opening and closing tag.
- They **do not require a closing tag**.
- **Syntax**: You can write them as \`<tagname>\` or \`<tagname />\`. The trailing slash (\`/\`) is optional in HTML5 but is a good practice for readability, especially for those familiar with XHTML.
- **Common Examples**:
    - \`<img>\`: Embeds an image. (e.g., \`<img src="image.jpg" alt="My Image">\`)
    - \`<input>\`: Creates an interactive control for web-based forms. (e.g., \`<input type="text" name="username">\`)
    - \`<br>\`: Inserts a line break.
    - \`<hr>\`: Represents a thematic break between paragraph-level elements (e.g., a horizontal rule).
    - \`<meta>\`: Provides metadata about the HTML document. (e.g., \`<meta charset="UTF-8">\`)
    - \`<link>\`: Links the document to external resources, like CSS stylesheets. (e.g., \`<link rel="stylesheet" href="styles.css">\`)

## Example Breakdown: An Anchor Tag

Let's analyze a complete anchor (\`<a>\`) tag, which creates a hyperlink:

\`\`\`html
<a href="https://example.com" target="_blank" class="external-link">Visit Example Site</a>
\`\`\`

- **Element Type**: Anchor element.
- **Opening Tag**: The entire \`<a href="https://example.com" target="_blank" class="external-link">\` part.
    - **Tag Name**: \`a\`
    - **Attributes**:
        - \`href="https://example.com"\`: The destination URL of the link.
        - \`target="_blank"\`: Instructs the browser to open the link in a new tab or window.
        - \`class="external-link"\`: A class name for styling or scripting purposes.
- **Content**: "Visit Example Site" (This is the text that will be displayed and clickable).
- **Closing Tag**: \`</a>\`

The entire structure from \`<a>\` to \`</a>\` forms the anchor *element*.

## Nesting Rules

HTML elements can be nested inside one another to create complex document structures. Proper nesting is crucial for valid HTML and predictable browser rendering.

- **Correct Nesting (LIFO)**: Elements must be closed in the reverse order they were opened (Last In, First Out).
  \`\`\`html
  <!-- Correct Nesting -->
  <div>
    <p>This is a paragraph with <strong><em>emphasized bold text</em></strong>.</p>
  </div>
  \`\`\`
  In this example, \`<em>\` is opened last inside \`<strong>\`, so it's closed first, then \`<strong>\`, then \`<p>\`, then \`<div>\`.

- **Incorrect Nesting**: Overlapping tags can lead to validation errors and browsers might struggle to render the page correctly.
  \`\`\`html
  <!-- Incorrect Nesting -->
  <p>This is <strong><em>important</p></strong> text.</em>
  \`\`\`
  Here, \`</p>\` appears before \`</strong>\` and \`</em>\`, which breaks the LIFO rule.

- **Semantic Nesting & Content Models**:
    - HTML specifications define "content models" for each element, dictating what kind of content (and thus, which other elements) can be placed inside them.
    - **Block-level vs. Inline elements**: Historically, block-level elements (like \`<div>\`, \`<p>\`, \`<h1>\`) could contain other block-level or inline elements. Inline elements (like \`<span>\`, \`<a>\`, \`<strong>\`) were generally expected to contain only other inline elements or text.
    - **Common Pitfalls**:
        - Do not put a block-level element like a \`<div>\` or another \`<p>\` inside a \`<p>\` tag. A paragraph element is meant for phrasing content and implicitly closes if another block-level element is encountered.
        - An \`<a>\` tag, while traditionally inline, can wrap block-level content in HTML5, but it's important to ensure the context is appropriate. (e.g. \`<a><div>Clickable block</div></a>\`)
        - You cannot nest an interactive element (like \`<a>\` or \`<button>\`) inside another interactive element.

## Quick Recap with Examples

Here are a couple of simple examples putting these concepts together:

\`\`\`html
<!-- A paragraph with a class attribute -->
<p class="intro">Welcome to HTML! This paragraph has a 'class' attribute.</p>

<!-- An image (self-closing tag) with src and alt attributes -->
<img src="example.jpg" alt="A placeholder image for demonstration">
\`\`\`

## Your Task

Create a webpage with:
1. A paragraph with a \`class="description"\` attribute containing a short text
2. An image with a placeholder URL and an \`alt\` attribute describing the image
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Tag Anatomy</title>
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
    <title>HTML Tag Anatomy</title>
  </head>
  <body>
    <p class="description">This is a sample paragraph about HTML tags.</p>
    <img src="/placeholder.svg?height=200&width=300" alt="Sample image of a placeholder graphic">
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "html-history",
  },
  nextLesson: {
    topic: "html",
    subtopic: "document-structure",
  },
};
