import type { Lesson } from "../../types"

export const layout: Lesson = {
  title: "Tailwind Layout",
  description: "Learn how to create layouts with Tailwind CSS",
  content: `
# Tailwind CSS Layout

Tailwind provides a comprehensive set of utilities for building layouts, including Flexbox, Grid, positioning, and more.

## Flexbox

Flexbox is a powerful layout method for arranging items in rows or columns.

\`\`\`html
<div class="flex items-center justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
\`\`\`

## Grid

CSS Grid is a two-dimensional layout system that Tailwind makes easy to use.

\`\`\`html
<div class="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
\`\`\`

## Responsive Design

Tailwind makes it easy to build responsive designs with breakpoint prefixes.

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Items will be in 1 column on mobile, 2 on tablet, 3 on desktop -->
</div>
\`\`\`

## Your Task

Create a responsive layout with:
1. A header with logo and navigation
2. A main section with a grid of cards (1 column on mobile, 2 on tablet, 3 on desktop)
3. A footer with multiple columns that stack on mobile
4. Use appropriate spacing and alignment
    `,
  initialCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>Tailwind Layout</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 min-h-screen">
    <!-- Create your responsive layout here -->
    
  </body>
</html>`,
  },
  solutionCode: {
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>Tailwind Layout</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="bg-indigo-500 text-white font-bold rounded-lg p-2 mr-2">WN</div>
              <span class="text-xl font-bold">Web Nepal</span>
            </div>
            <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex items-center space-x-6">
            <a href="#" class="text-gray-800 hover:text-indigo-500">Home</a>
            <a href="#" class="text-gray-800 hover:text-indigo-500">Features</a>
            <a href="#" class="text-gray-800 hover:text-indigo-500">Pricing</a>
            <a href="#" class="text-gray-800 hover:text-indigo-500">About</a>
            <a href="#" class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg">Sign Up</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Featured Content</h1>
      
      <!-- Grid of Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img src="/placeholder.svg?height=200&width=400" alt="Card image" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="font-bold text-xl mb-2">Card Title 1</h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <button class="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Read More</button>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img src="/placeholder.svg?height=200&width=400" alt="Card image" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="font-bold text-xl mb-2">Card Title 2</h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <button class="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Read More</button>
          </div>
        </div>
        
        <!-- Card 3 -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img src="/placeholder.svg?height=200&width=400" alt="Card image" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="font-bold text-xl mb-2">Card Title 3</h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <button class="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Read More</button>
          </div>
        </div>
        
        <!-- Card 4 -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img src="/placeholder.svg?height=200&width=400" alt="Card image" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="font-bold text-xl mb-2">Card Title 4</h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <button class="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Read More</button>
          </div>
        </div>
        
        <!-- Card 5 -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img src="/placeholder.svg?height=200&width=400" alt="Card image" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="font-bold text-xl mb-2">Card Title 5</h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <button class="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Read More</button>
          </div>
        </div>
        
        <!-- Card 6 -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img src="/placeholder.svg?height=200&width=400" alt="Card image" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="font-bold text-xl mb-2">Card Title 6</h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <button class="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Read More</button>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Column 1 -->
          <div>
            <h3 class="text-lg font-semibold mb-4">About Us</h3>
            <p class="text-gray-400">Web Nepal is a platform for learning web development through interactive lessons and hands-on coding.</p>
          </div>
          
          <!-- Column 2 -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <!-- Column 3 -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Tutorials</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <!-- Column 4 -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Subscribe</h3>
            <p class="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <div class="flex">
              <input type="email" placeholder="Your email" class="px-4 py-2 w-full rounded-l text-gray-800">
              <button class="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-r">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400">&copy; 2023 Web Nepal. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>`,
  },
  prevLesson: {
    topic: "tailwind",
    subtopic: "utility-first",
  },
}
