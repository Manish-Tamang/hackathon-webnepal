import type { Lesson } from "../../types"

export const boxModel: Lesson = {
  title: "CSS Box Model",
  description: "Learn about the CSS box model and how to use it",
  content: `
# CSS Box Model

The CSS box model is essentially a box that wraps around every HTML element. It consists of margins, borders, padding, and the actual content.

## Components of the Box Model

### Content

The content of the box, where text and images appear.

### Padding

Clears an area around the content. The padding is transparent.

### Border

A border that goes around the padding and content.

### Margin

Clears an area outside the border. The margin is transparent.

\`\`\`css
div {
  width: 300px;
  padding: 10px;
  border: 5px solid gray;
  margin: 20px;
}
\`\`\`

## Box Sizing

The \`box-sizing\` property defines how the width and height of an element are calculated.

\`\`\`css
/* Default behavior */
box-sizing: content-box;

/* Include padding and border in the element's width and height */
box-sizing: border-box;
\`\`\`

## Your Task

Create a layout with multiple boxes:
1. Create at least three div elements with different content
2. Apply different padding, margin, and border to each
3. Use box-sizing: border-box on one of them
4. Add background colors to help visualize the boxes
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>CSS Box Model</title>
  </head>
  <body>
    <h1>Understanding the Box Model</h1>
    
    <div class="box-1">
      Box 1 Content
    </div>
    
    <div class="box-2">
      Box 2 Content
    </div>
    
    <div class="box-3">
      Box 3 Content
    </div>
  </body>
</html>`,
    css: `/* Write your CSS here */

`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>CSS Box Model</title>
  </head>
  <body>
    <h1>Understanding the Box Model</h1>
    
    <div class="box-1">
      Box 1 Content
    </div>
    
    <div class="box-2">
      Box 2 Content
    </div>
    
    <div class="box-3">
      Box 3 Content
    </div>
  </body>
</html>`,
    css: `/* CSS Box Model Solution */
body {
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

/* Box 1 - Default box-sizing (content-box) */
.box-1 {
  width: 300px;
  padding: 20px;
  border: 5px solid #457b9d;
  margin: 30px auto;
  background-color: #a8dadc;
  text-align: center;
  font-weight: bold;
}

/* Box 2 - Using border-box */
.box-2 {
  box-sizing: border-box;
  width: 300px; /* Total width will be 300px including padding and border */
  padding: 30px;
  border: 10px dashed #e63946;
  margin: 40px auto;
  background-color: #f1faee;
  text-align: center;
  font-weight: bold;
}

/* Box 3 - Different styling */
.box-3 {
  width: 250px;
  padding: 15px 25px;
  border: 8px double #1d3557;
  border-radius: 15px;
  margin: 50px auto;
  background-color: #ffb703;
  text-align: center;
  font-weight: bold;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}`,
  },
  prevLesson: {
    topic: "css",
    subtopic: "selectors",
  },
  nextLesson: {
    topic: "tailwind",
    subtopic: "utility-first",
  },
}
