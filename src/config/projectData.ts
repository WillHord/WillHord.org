import type { Project } from "@/types/projects";

export const projectData: Project[] = [
    {
      weight: 0,
      name: "BlackJack-Cpp",
      description:
        "The card game of Blackjack made from scratch in C++ using only standard libraries. It is playable in a terminal environment making it playable on every computer that has a terminal or command prompt.",
      link: "https://github.com/WillHord/BlackJack-Cpp",
      displayed: true,
      img: {
        name: "BlackJack-CppImage",
        content: "Image for my C++ blackjack game",
        image: {
          full_size: "/imgs/projectImages/BlackJack-CppImage_sL8k3M0.jpg",
        },
      },
      languages: ["C++"],
    },
    {
      weight: 1,
      name: "SnapCycle",
      description:
        "An app for iPhone and iPad that uses machine learning to detect if an object in an image is recyclable or not based off of training data of trash and recyclable materials.",
      link: "https://github.com/WillHord/SnapCycle",
      displayed: true,
      img: {
        name: "SnapCycleImage",
        content: "Logo for the SnapCycle app",
        image: {
          full_size: "/imgs/projectImages/SnapCycleImage.jpg",
        },
      },
      languages: ["Swift"],
    },
    {
      weight: 2,
      name: "React Terminal",
      description:
        "A React terminal component to create a typewriter effect on any React based website. It has settings to change the speed for each individual line or word and allows you to customize the component however you need.",
      link: "https://github.com/WillHord/ReactTerminal",
      displayed: true,
      img: {
        pk: 6,
        name: "ReactTerminalImage",
        content: "Image of the React Terminal Component",
        image: {
          full_size: "/imgs/projectImages/ReactTerminalImage_gwZHFyy.jpg",
        },
      },
      languages: ["HTML", "CSS", "React JS"],
    },
    {
      weight: 3,
      name: "Mat2Csv",
      description:
        "A script used to clean up and convert MAT files containing csv style data into CSV files.",
      link: "https://github.com/WillHord/Mat2Csv",
      displayed: true,
      img: {
        pk: 4,
        name: "Mat2Csv",
        content: "Logo for my Mat2Csv project",
        image: {
          full_size: "/imgs/projectImages/Mat2CsvImage.jpg",
        },
      },
      languages: ["Python"],
    },
    {
      weight: 4,
      name: "iMessage Bot",
      description:
        "A framework for an iMessage chat bot which uses python and sql to detect new messages received and uses AppleScript to reply to commands given by the user. The bot must be run on MacOS and is still being worked on.",
      teaser:
        "A framework for an iMessage chatbot that uses python and SQL to detect new messages received and uses AppleScript to reply to commands given by the user.",
      link: "https://github.com/WillHord/iMessageBot",
      displayed: true,
      img: {
        name: "iMessageBotImage",
        content: "iMessage Logo",
        image: {
          full_size: "/imgs/projectImages/iMessageBotImage.jpg",
        },
      },
      languages: ["Python", "SQL"],
    },
    {
      weight: 5,
      name: "Discord Bot",
      description:
        "A bot written in python which uses the discord api to play music, games, and give information on stocks all in discord.",
      link: "https://github.com/WillHord/DiscordBot",
      displayed: false,
      img: {
        name: "DiscordBotImage",
        content: "Discord Logo",
        image: {
          full_size: "/imgs/projectImages/DiscordBotImage.jpg",
        },
      },
      languages: ["Python"],
    },
    {
      weight: 6,
      name: "WillHord.org",
      description:
        "This website! This is my personal website which houses my resume, my past work, and information about me, along with the professional side of this website I made it so that I can use it as a place to interface with any future projects which can be connected to the internet.",
      link: "https://github.com/WillHord/WillHord.org",
      displayed: true,
      img: {
        name: "WillHord.org",
        content: "Image of the front page of WillHord.org",
        image: {
          full_size: "/imgs/projectImages/WillHordorg_RNUh6Nw.jpg",
        },
      },
      languages: ["HTML", "CSS", "React JS", "Django"],
    },
    {
      weight: 7,
      name: "Craigslist Tracker",
      description:
        "A bot that tracks pages on Craigslist and will email you with updates to items you want.",
      link: "https://github.com/WillHord/CraigslistTracker",
      displayed: true,
      img: {
        name: "CraigslistTracker Image",
        content: "The Craigslist Logo",
        image: {
          full_size: "/imgs/projectImages/CraigslistBot.jpg",
        },
      },
      languages: ["Python", "SQL"],
    },
    {
      weight: 7,
      name: "Simple Wordle Solver",
      description:
        "SimpleWordleSolver is a quick and easy way to cheat at Wordle by searching the English dictionary for the correct words to guess",
      link: "https://github.com/WillHord/CraigslistTracker",
      displayed: true,
      img: {
        name: "WordleLogo",
        content: "The logo for the game Wordle",
        image: {
          full_size: "/imgs/projectImages/wordle-logo.jpeg",
        },
      },
      languages: ["Python"],
    },
    {
      weight: 7,
      name: "Deep Learning Graph Reader",
      description:
        "A machine learning program that employs a Large Language Model (BERT) and a Convolutional Neural Network (CNN) to efficiently convert various types of graphs, including bar charts and scatter plots, into structured data tables. This program simplifies the process of extracting data from graphical representations by leveraging BERT's textual understanding and the CNN's graphical interpretation capabilities. It serves as a practical tool for the conversion of complex visual data into organized tables, streamlining the task of converting graphs into usable formats.",
      link: "https://github.com/WillHord/Deep-Learning-Graph-Reader",
      displayed: true,
      img: {
        name: "Graph Data Extractor",
        content: "The logo for my graph data extractor project",
        image: {
          full_size: "/imgs/projectImages/graphtotable.jpg",
        },
      },
      languages: ["Python", "PyTorch"],
    },
    {
      weight: 7,
      name: "C++ HTTP Server",
      description:
        "A Simple HTTP Server made with C++ that supports the standard get and put HTTP protocol commands as well as others. There are two programs in the repo cxi and cxid. cxi is the client while cxid is the server program.",
      link: "https://github.com/WillHord/CppHTTPServer",
      displayed: true,
      img: {
        name: "C++ HTTP Server Logo",
        content: "The logo my C++ HTTP Server project",
        image: {
          full_size: "/imgs/projectImages/httpServer.jpg",
        },
      },
      languages: ["C++"],
    },
    {
      weight: 7,
      name: "Multithreaded C HTTP Server",
      description:
        "A simple web server that allows for three basic http methods: GET, PUT, and APPEND. httpserver processes the requests and logs them to either a designated file or stdout. httpserver using multiple threads to speed up and handle multiple operations at once and also preserves atomicity and coherency.",
      link: "https://github.com/WillHord/MultiThreadedHttpServer",
      displayed: true,
      img: {
        name: "Multithreaded C HTTP Server",
        content: "The logo for my Multithreaded C HTTP Server project",
        image: {
          full_size: "/imgs/projectImages/multiThreadedHttpServer.jpg",
        },
      },
      languages: ["C"],
    },
    {
      weight: 7,
      name: "Connect 4 AI",
      description:
        "A a connect four game that has two types of AI options to play against. Choose either to play against the Expectimax or Alpha-beta pruning models or make them play eachother!",
      link: "https://github.com/WillHord/ConnectFourAI",
      displayed: true,
      img: {
        name: "Connect 4 AI",
        content: "The logo for my Connect 4 AI project",
        image: {
          full_size: "/imgs/projectImages/Connect4AI.png",
        },
      },
      languages: ["Python"],
    },
    {
      weight: 7,
      name: "WebGL Blocky Frog",
      description:
        "Blocky Frog is just that, a frog made from boxes. Made entirely using WebGL and Javascript. Each limb is movable and the entire animal is animated.",
      link: "https://github.com/WillHord/WebGL-BlockyFrog",
      displayed: true,
      img: {
        name: "WebGL Blocky Frog",
        content: "The logo for my WebGL Blocky Frog project",
        image: {
          full_size: "/imgs/projectImages/blockyFrog.png",
        },
      },
      languages: ["Javascript", "WebGL"],
    },
    {
      weight: 7,
      name: "Wikipedia Graph Generator",
      description:
        "A url collector for Wikipedia using breadth first search. It can be used to generate a graph of Wikipedia pages and their links to other pages.",
      link: "https://github.com/WillHord/WikiGraph",
      displayed: true,
      img: {
        name: "Wikipedia Graph Generator",
        content: "The logo for my Wikipedia Graph Generator project",
        image: {
          full_size: "/imgs/projectImages/wikiGraph.jpg",
        },
      },
      languages: ["Python"],
    },
    {
      weight: 7,
      name: "C++ File System",
      description:
        "A Simple Filesystem Created using C++ that allows for the creation of files and directories, reading and writing to files, and deleting files and directories as well as many more standard filesystem operations.",
      link: "https://github.com/WillHord/CppFilesystem",
      displayed: true,
      img: {
        name: "C++ File System",
        content: "The logo for my C++ File System project",
        image: {
          full_size: "/imgs/projectImages/cppFilesystem.jpg",
        },
      },
      languages: ["Python"],
    },
  ];
  