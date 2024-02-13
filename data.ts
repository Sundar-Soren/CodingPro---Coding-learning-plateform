// Define types for lessons and sections
type Lesson = string;
export type Section = {
  id: number;
  title: string;
  videoLink: string;
  lessons: Lesson[];
};

// Define the main course type
export type Course = {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  sections: Section[];
};

// Define the type for the entire dummyCourses array
type DummyCoursesType = Course[];
// ... (previous code)

// Add more courses as needed
const dummyCourses: DummyCoursesType = [
  {
    id: 1,
    title: "Introduction to Programming",
    slug: "introduction-to-programming",
    description:
      "Learn the fundamentals of programming with this introductory course.",
    thumbnail:
      "https://cdn.pixabay.com/photo/2019/12/11/04/14/web-4687386_1280.jpg",
    sections: [
      {
        id: 101,
        title: "Getting Started",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: [
          "Setting Up Your Development Environment",
          "Basic Programming Concepts",
        ],
      },
      {
        id: 102,
        title: "Variables and Data Types",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        lessons: [
          "Understanding Variables",
          "Working with Strings and Numbers",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Web Development Basics",
    slug: "web-development-basics",
    description:
      "Explore the essentials of web development in this beginner-friendly course.",
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
    sections: [
      {
        id: 201,
        title: "HTML Fundamentals",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Introduction to HTML", "Structuring HTML Documents"],
      },
      {
        id: 202,
        title: "CSS Styling",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        lessons: ["Styling HTML Elements", "CSS Layouts"],
      },
      {
        id: 203,
        title: "JavaScript Basics",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Introduction to JavaScript", "Control Flow and Functions"],
      },
      {
        id: 204,
        title: "Responsive Design",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        lessons: ["Media Queries", "Flexbox and Grid"],
      },
      {
        id: 205,
        title: "Frontend Frameworks",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        lessons: ["Introduction to React", "Angular vs. Vue vs. React"],
      },
    ],
  },
  {
    id: 3,
    title: "Advanced JavaScript",
    slug: "advanced-javaScript",
    description:
      "Dive deeper into JavaScript and explore advanced concepts and frameworks.",
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_1280.jpg",
    sections: [
      {
        id: 301,
        title: "Closures and Scopes",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Understanding Closures", "Lexical Scoping"],
      },
      {
        id: 302,
        title: "Promises and Async/Await",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Working with Promises", "Async/Await Syntax"],
      },
      {
        id: 303,
        title: "ES6+ Features",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Arrow Functions", "Destructuring", "Template Literals"],
      },
    ],
  },
  {
    id: 4,
    title: "React.js Fundamentals",
    slug: "react.js-fundamentals",
    description:
      "Explore the core concepts of React.js and build dynamic user interfaces.",
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784_1280.jpg",
    sections: [
      {
        id: 401,
        title: "Introduction to React Components",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Understanding Components", "Props and State"],
      },
      {
        id: 402,
        title: "State Management in React",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Using useState Hook", "Context API"],
      },
      {
        id: 403,
        title: "React Router and Navigation",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Navigating Between Pages", "Dynamic Routing"],
      },
    ],
  },
  {
    id: 5,
    title: "Python Programming Basics",
    slug: "python-programming-basics",
    description:
      "Learn the basics of Python programming language and its applications.",
    thumbnail:
      "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png",
    sections: [
      {
        id: 501,
        title: "Introduction to Python Syntax",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Variables and Data Types", "Control Flow"],
      },
      {
        id: 502,
        title: "Functions and Modules",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Defining Functions", "Importing Modules"],
      },
      {
        id: 503,
        title: "File Handling in Python",
        videoLink:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        lessons: ["Reading and Writing Files", "Working with CSV Files"],
      },
    ],
  },

  // Add more courses as needed
];

export { dummyCourses };
