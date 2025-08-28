import type { Lesson } from "../../types"

export const selectors: Lesson = {
  title: "CSS Selectors",
  description: "Learn how to select HTML elements with CSS",
  content: `
# CSS Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

## Basic Selectors

### Element Selector

The element selector selects HTML elements based on the element name.

\`\`\`css
p {
  color: red;
}
\`\`\`

### ID Selector

The ID selector uses the id attribute of an HTML element to select a specific element.

\`\`\`css
#unique-element {
  color: blue;
}
\`\`\`

### Class Selector

The class selector selects HTML elements with a specific class attribute.

\`\`\`css
.my-class {
  color: green;
}
\`\`\`

## Combinators

### Descendant Selector

Selects all elements that are descendants of a specified element.

\`\`\`css
div p {
  color: purple;
}
\`\`\`

### Child Selector

Selects all elements that are the direct children of a specified element.

\`\`\`css
div > p {
  color: orange;
}
\`\`\`

## Your Task

Style the HTML content using CSS selectors:
1. Make all paragraphs blue
2. Give the heading a different color
3. Add a class to some elements and style them differently
4. Use a descendant selector to style elements inside a container
  `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>CSS Selectors</title>
  </head>
  <body>
    <h1>Learning CSS Selectors</h1>
    
    <div id="container">
      <p>This is a paragraph inside a container.</p>
      <p class="highlight">This paragraph has a class.</p>
      <div>
        <p>This is a nested paragraph.</p>
      </div>
    </div>
    
    <p>This is a paragraph outside the container.</p>
  </body>
</html>`,
    css: `/* Write your CSS here */

`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>CSS Selectors</title>
  </head>
  <body>
    <h1>Learning CSS Selectors</h1>
    
    <div id="container">
      <p>This is a paragraph inside a container.</p>
      <p class="highlight">This paragraph has a class.</p>
      <div>
        <p>This is a nested paragraph.</p>
      </div>
    </div>
    
    <p>This is a paragraph outside the container.</p>
  </body>
</html>`,
    css: `/* CSS Solution */
p {
  color: blue;
}

h1 {
  color: #e63946;
}

.highlight {
  background-color: #ffff00;
  font-weight: bold;
}

#container p {
  border-left: 3px solid #457b9d;
  padding-left: 10px;
}

#container > p {
  margin-bottom: 15px;
}`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "elements-advanced",
  },
  nextLesson: {
    topic: "css",
    subtopic: "box-model",
  },
}
