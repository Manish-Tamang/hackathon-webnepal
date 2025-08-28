import type { Lesson } from "../../types";

export const forms: Lesson = {
  title: "HTML Forms Basics",
  description: "Learn how to create basic HTML forms",
  content: `
# HTML Forms Basics

Forms collect user input using \`<form>\`, \`<input>\`, and other elements.

## Key Elements

- **\<form\>**: Container for form elements
- **\<input\>**: Input fields (e.g., text, email)
- **\<label\>**: Labels for inputs
- **\<button\>**: Submits the form

\`\`\`html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name">
</form>
\`\`\`

## Your Task

Create a contact form with:
1. A text input for name
2. An email input
3. Labels for both inputs
4. A submit button
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Forms</title>
  </head>
  <body>
    <form>
      <!-- Write your code here -->
    </form>
  </body>
</html>`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Forms</title>
  </head>
  <body>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <button type="submit">Submit</button>
    </form>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "html-images",
  },
  nextLesson: {
    topic: "html",
    subtopic: "html-tables",
  },
};
