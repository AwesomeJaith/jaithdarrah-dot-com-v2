import { Project } from "@/types/types";

export const graduationDate = new Date("May 11, 2026");

export const projects: Project[] = [
  {
    title: "SunDevil Book Buying and Selling System",
    startDate: new Date("October 2024"),
    endDate: new Date("November 2024"),
    link: "https://github.com/AwesomeJaith/sundevil-bookstore-system",
    description:
      "A JavaFX application to facilitate the sale of books between buyers and sellers along with a dashboard for administrators to monitor listings, sales, transactions, and users.",
    techStack: ["Java", "JavaFX", "sqlite3", "CSS", "FXML"],
  },
  {
    title: "Noodlebot",
    startDate: new Date("August 2024"),
    endDate: new Date("September 2024"),
    link: "https://github.com/AwesomeJaith/noodlebot",
    description:
      "A Discord bot that logs and displays the difference between two messages when a message is edited on Discord. Noodlebot tracked over 500 message edits and highlighted changes in messages for three months.",
    techStack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Express.js",
      "Puppeteer.js",
      "Discord.js",
      "AWS EC2",
      "Docker",
    ],
  },
  {
    title: "Clash of Clans Base Finder",
    startDate: new Date("May 2024"),
    endDate: new Date("June 2024"),
    link: "https://github.com/AwesomeJaith/Clash-of-Clans-Farming-Assistant",
    description:
      "A command-line interface to find Clash of Clans bases with a minimum amount of loot. This tool decreased the amount of time I spent searching for bases by 90%.",
    techStack: ["Python", "OpenCV", "easyocr", "AutoHotKey"],
  },
  {
    title: "Grocery Store GPS",
    startDate: new Date("January 2024"),
    endDate: new Date("February 2024"),
    link: "https://github.com/AwesomeJaith/Grocery-Store-GPS",
    description:
      "A Flask API and Jupyter Notebook to display the best path to travel through a grocery store based on a grocery list.",
    techStack: [
      "Python",
      "Flask",
      "NetworkX",
      "matplotlib",
      "Pillow",
      "Jupyter Notebooks",
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
