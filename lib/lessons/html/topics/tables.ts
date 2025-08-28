import type { Lesson } from "../../types";

export const tables: Lesson = {
  title: "HTML Tables",
  description: "Learn how to create tables in HTML",
  content: `
# HTML Tables

Tables display tabular data using \`<table>\`, \`<tr>\`, \`<th>\`, and \`<td>\`.

## Key Elements

- **\<table\>**: Table container
- **\<tr\>**: Table row
- **\<th\>**: Table header
- **\<td\>**: Table data

\`\`\`html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
\`\`\`

## Your Task

Create a table with:
1. Headers for "Day" and "Task"
2. Two rows of data for a weekly schedule
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Tables</title>
  </head>
  <body>
    <table>
      <!-- Write your code here -->
    </table>
  </body>
</html>`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Tables</title>
  </head>
  <body>
    <table>
      <tr>
        <th>Day</th>
        <th>Task</th>
      </tr>
      <tr>
        <td>Monday</td>
        <td>Learn HTML</td>
      </tr>
      <tr>
        <td>Tuesday</td>
        <td>Practice CSS</td>
      </tr>
    </table>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "html",
    subtopic: "html-forms",
  },
  nextLesson: {
    topic: "html",
    subtopic: "semantic-elements",
  },
};
