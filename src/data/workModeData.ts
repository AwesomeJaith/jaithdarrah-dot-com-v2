import { Project, WorkExperience } from "@/types/types";

export const graduationDate = new Date("2026-5-11 12:00:00".replace(/-/g, "/"));

export const GitHubURL = "https://github.com/AwesomeJaith";
export const WebsiteSourceURL =
  "https://github.com/AwesomeJaith/jaithdarrah-dot-com-v2";
export const PraniWebsiteURL = "https://prani.dev/";
export const ThibaultWebsiteURL = "https://thibault.sh/";

export const headerSentences = [
  "Undergrad computer science senior at ASU",
  "Incoming software engineer intern at Walgreens",
  "Working on some cool projects",
];

export const workExperiences: WorkExperience[] = [
  {
    company: "Walgreens",
    jobTitle: "Incoming Software Engineer Intern",
    startDate: new Date("2025-6-1 00:00:00".replace(/-/g, "/")),
    endDate: new Date("2025-8-1 00:00:00".replace(/-/g, "/")),
    link: "https://www.walgreens.com/",
    description:
      "Expected to collaborate with other software engineers on the myWalgreens Rewards program using Java, learn about the company, and adhere to company culture/values during the upcoming internship.",
    techStack: ["Java", "Microsoft Teams"],
  },
];

export const projects: Project[] = [
  {
    title: "jaithdarrah.com v2",
    startDate: new Date("2025-5-1 00:00:00".replace(/-/g, "/")),
    link: "https://github.com/AwesomeJaith/jaithdarrah-dot-com-v2",
    description: "A revamped version of my portfolio website using Next.js.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "npm.js"],
  },
  {
    title: "Ecommerce Application",
    startDate: new Date("2025-4-1 00:00:00".replace(/-/g, "/")),
    endDate: new Date("2025-5-1 00:00:00".replace(/-/g, "/")),
    description:
      "A full stack ecommerce web application created with React and FastAPI. Users can sign up to create and order listings, view user profiles, and view their previous transactions.",
    techStack: [
      "TypeScript",
      "React",
      "React Router",
      "Vite",
      "Tailwind CSS",
      "npm.js",
      "Python",
      "FastAPI",
      "Psycopg2",
      "PostgreSQL",
    ],
  },
  {
    title: "Gemini Chess Game Review",
    startDate: new Date("2025-3-1 00:00:00".replace(/-/g, "/")),
    endDate: new Date("2025-5-1 00:00:00".replace(/-/g, "/")),
    description:
      "An ASP.NET application that analyzes chess games and uses Google's Gemini AI to display AI-generated explanations of how key moves impacted the outcomes.",
    techStack: ["C#", "ASP.NET", "Gemini AI"],
  },
  {
    title: "SunDevil Book Buying and Selling System",
    startDate: new Date("2024-10-1 00:00:00".replace(/-/g, "/")),
    endDate: new Date("2024-11-1 00:00:00".replace(/-/g, "/")),
    description:
      "A JavaFX application to facilitate the sale of books between buyers and sellers along with a dashboard for administrators to monitor listings, sales, transactions, and users.",
    techStack: ["Java", "JavaFX", "Sqlite3", "CSS", "FXML"],
  },
  {
    title: "Noodlebot",
    startDate: new Date("2024-8-1 00:00:00".replace(/-/g, "/")),
    endDate: new Date("2024-9-1 00:00:00".replace(/-/g, "/")),
    link: "https://github.com/AwesomeJaith/noodlebot",
    description:
      "A Discord bot that logs and displays the difference between two messages when a message is edited on Discord. Noodlebot tracked over 500 message edits and highlighted changes in messages for three months.",
    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "npm.js",
      "Express.js",
      "Puppeteer.js",
      "Discord.js",
      "AWS EC2",
      "Docker",
    ],
  },
  {
    title: "Clash of Clans Base Finder",
    startDate: new Date("2024-5-1 00:00:00".replace(/-/g, "/")),
    endDate: new Date("2024-6-1 00:00:00".replace(/-/g, "/")),
    link: "https://github.com/AwesomeJaith/Clash-of-Clans-Farming-Assistant",
    description:
      "A command-line interface to find Clash of Clans bases with a minimum amount of loot. This tool decreased the amount of time I spent searching for bases by 90%.",
    techStack: ["Python", "OpenCV", "EasyOCR", "AutoHotKey"],
  },
  {
    title: "Grocery Store GPS",
    startDate: new Date("2024-1-1 00:00:00".replace(/-/g, "/")),
    endDate: new Date("2024-2-1 00:00:00".replace(/-/g, "/")),
    link: "https://github.com/AwesomeJaith/Grocery-Store-GPS",
    description:
      "A Flask API and Jupyter Notebook to calculate and display the fastest route to travel through a grocery store to get every item on a grocery list.",
    techStack: [
      "Python",
      "Flask",
      "NetworkX",
      "Matplotlib",
      "Pillow",
      "Jupyter Notebook",
    ],
  },
];

// Add more projects using the example below. endDate, link, and techStack are optional.
// {
//   title: "",
//   startDate: new Date(""),
//   endDate: new Date(""),
//   link: "",
//   description: "",
//   techStack: ["",]
// },
