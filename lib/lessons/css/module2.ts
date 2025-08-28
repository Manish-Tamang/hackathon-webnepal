import { Lesson } from "../types"

export const module2Lessons: Lesson[] = [
  {
    title: "Introduction to CSS3",
    description: "Learn the basics of CSS3 and its role in styling web pages",
    content: "CSS3 is the latest version of CSS that provides powerful styling capabilities for web pages.",
    initialCode: {
      html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Introduction to CSS3</title>\n  <style>\n    .container {\n      width: 80%;\n      margin: 0 auto;\n      padding: 20px;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <h1>CSS3 Basics</h1>\n    <p>This is our first CSS3 styled paragraph.</p>\n  </div>\n</body>\n</html>"
    }
  },
  {
    title: "Anatomy of a CSS Rule",
    description: "Understanding CSS selectors and properties",
    content: "Learn how to create CSS rules using selectors and properties.",
    initialCode: {
      html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>CSS Rules</title>\n  <style>\n    .text-large {\n      font-size: 24px;\n      color: #333;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"text-large\">\n    <h1>CSS Rule Example</h1>\n    <p>This text uses a CSS class selector.</p>\n  </div>\n</body>\n</html>"
    }
  },
]
