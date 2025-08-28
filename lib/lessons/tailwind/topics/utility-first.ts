import type { Lesson } from "../../types"

export const utilityFirst: Lesson = {
  title: "Utility-First CSS",
  description: "Learn the utility-first approach of Tailwind CSS",
  content: `
# Utility-First CSS with Tailwind

Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.

## The Utility-First Approach

Instead of writing custom CSS, you apply pre-existing classes directly in your HTML.

### Traditional CSS:

\`\`\`css
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #3490dc;
  color: white;
  font-weight: 600;
}
\`\`\`

### With Tailwind:

\`\`\`html
<button class="py-2 px-4 rounded bg-blue-500 text-white font-semibold">
  Button
</button>
\`\`\`

## Common Utility Classes

- Spacing: \`p-4\` (padding), \`m-2\` (margin)
- Typography: \`text-lg\`, \`font-bold\`
- Colors: \`text-blue-500\`, \`bg-gray-200\`
- Flexbox: \`flex\`, \`items-center\`
- Grid: \`grid\`, \`grid-cols-3\`
- Responsive: \`md:flex\`, \`lg:text-xl\`

## Your Task

Create a simple card component using Tailwind utility classes:
1. Create a card with padding and rounded corners
2. Add a heading, paragraph, and button
3. Style them using Tailwind classes
4. Make it responsive (different on mobile vs desktop)
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>Tailwind CSS Basics</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 p-4">
    <h1 class="text-2xl font-bold mb-4">Tailwind Card Component</h1>
    
    <!-- Create your card here using Tailwind classes -->
    
  </body>
</html>`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>Tailwind CSS Basics</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 p-4">
    <h1 class="text-2xl font-bold mb-4">Tailwind Card Component</h1>
    
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img class="h-48 w-full object-cover md:h-full md:w-48" src="/placeholder.svg?height=200&width=200" alt="Card image">
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Category</div>
          <h2 class="block mt-1 text-lg leading-tight font-medium text-black">Card Title Goes Here</h2>
          <p class="mt-2 text-gray-500">This is a simple card component built with Tailwind CSS utility classes. It's responsive and looks different on mobile vs desktop.</p>
          <button class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Learn More</button>
        </div>
      </div>
    </div>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "css",
    subtopic: "box-model",
  },
  nextLesson: {
    topic: "tailwind",
    subtopic: "layout",
  },
}
