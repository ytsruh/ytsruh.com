import type { Project } from "~/types";

export const projects: Project[] = [
  {
    name: "Homethings",
    id: 1,
    img: "/img/homethings.webp",
    description:
      "The home & personal playground built using Pocketbase, Go & React. The app features a number of hobby projects including a personal note taking app, document storage, a personalised AI Chatbot as well as others. A CLI application is also included that extends some of the server functionality into the command line.",
    technologies: [
      "Go",
      "SQLite",
      "React",
      "Tailwind CSS",
      "Pocketbase",
      "Charm",
    ],
    link: {
      url: "https://homethings.ytsruh.com/",
      text: "Visit",
    },
    github: {
      url: "https://github.com/ytsruh/homethings",
      text: "Github",
    },
  },
  {
    name: "Webiliti",
    id: 2,
    img: "/img/webiliti.webp",
    description:
      "The web testing app built using TypeScript & React. The Hono app has the majority of the functionality The Hono app has the majority of the functionality, there are api routes to handle a few specific browser based tasks and the main app CRYD functionality including auth. The app runs a number of browser based tests on a given page to allow a user to track web performance over time.",
    technologies: [
      "Typescript",
      "React",
      "Tailwind CSS",
      "HonoJS",
      "Cloudflare",
      "SQlite",
    ],
    link: {
      url: "https://www.webiliti.com/",
      text: "Visit",
    },
    github: null,
  },
  {
    name: "Finly",
    id: 3,
    img: "/img/finly.png",
    description:
      "Finly is a market data app built using Go, Echo & SQLite. The app is an API that holds relevant market data from over 25+ sources and aggregates it into a single scalable format. HTMX is used to create a small logged in section to allow users to manage API keys.",
    technologies: [
      "Go / Golang",
      "Echo",
      "HTMX",
      "Tailwind CSS",
      "Railway",
      "SQLite",
    ],
    link: {
      url: "https://www.finly.cc",
      text: "Visit",
    },
    github: null,
  },
];
