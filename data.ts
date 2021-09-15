import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/Gi";
import { IService, ISkill, IProject } from './type'
import { VscExtensions } from "react-icons/vsc"
import { SiGraphql, SiJavascript, SiTypescript, SiMongodb, SiPython, 
         SiNodeDotJs, SiReact, SiMaterialUi, SiTailwindcss, SiBootstrap,
         SiPostgresql, SiAmazonaws, SiVim , SiDjango, SiNextDotJs, SiGit, SiWordpress, SiEthereum
        } from "react-icons/si";

export const services:IService[] = [
    {
      Icon: RiComputerLine,
      title: "Frontend",
      about:
        "<b>React.js</b> and UI frameworks on the client side",
    },
   /* {
      Icon: FaServer,
      title: "Backend  Development",
      about:
        "Handle databases, server, api using <b>Express </b> & other popular frameworks",
    }*/,
    {
      Icon: AiOutlineApi,
      title: "API Development",
      about:
        "Designing REST APIs with <b>Node.js</b> and <b>Express </b> ",
    },
    {
      Icon: VscExtensions,
      title: "Contnuous learning",
      about: "Picking up technologies that are relevant to acheiving set goals ",
    },
    {
      Icon: GiPerspectiveDiceSixFacesRandom,
      title: "Perspective",
      about:
        "Problem solving using knowledge from a different field",
    },
   /* {
      Icon: RiComputerLine,
      title: "Whatever",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
    },*/
  ];

export const languages:ISkill[] = [
    {
        Icon: SiJavascript,
        name: "JavaScript",
        level: "100",
      },
      {
        Icon: SiPython,
        name: "Python",
        level: "90",
      },
      {
        Icon: SiReact,
        name: "React.js",
        level: "85",
      },
      {
        Icon: SiNextDotJs,
        name: "Next.js",
        level: "60",
      },
      {
        Icon: SiNodeDotJs,
        name: "Node.js + Express",
        level: "70",
      },
      {
        Icon: SiMongodb,
        name: "MongoDB native + mongoose",
        level: "65",
      },
      {
        Icon: SiWordpress,
        name: "Wordpress",
        level: "75",
      },
      {
        Icon: SiGit,
        name: "Git version control ",
        level: "55",
      },
      {
        Icon: SiMaterialUi,
        name: "Material UI",
        level: "70",
      },
      {
        Icon: SiTailwindcss,
        name: "Tailwind css",
        level: "68",
      },
      {
        Icon: SiBootstrap,
        name: "Bootstrap",
        level: "64",
      },
      
  ];
    
export const tools: ISkill[] = [
      {
        Icon: SiTypescript,
        name: "TypeScript",
        level: "50",
      },
      {
        Icon: SiGraphql,
        name: "GraphQl",
        level: "30",
      },
      {
        Icon: SiPostgresql,
        name: "Postgresql",
        level: "45",
      },
      {
        Icon: SiDjango,
        name: "Django",
        level: "50",
      },
      {
        Icon: SiAmazonaws,
        name: "AWS",
        level: "34",
      },
      {
        Icon: SiVim,
        name: "Vim",
        level: "30",
      },
      {
        Icon: SiEthereum,
        name: "Solidity",
        level: "33",
      },
  ]; 

export const projects:IProject[] = [
  { 
    id: 1,
    name: "Crypto gazer",
    description:
      "A simple app that displays up-to-date crypto market data along with a filter-search feature",
    image_path: "/images/crypto-gazer.png",
    deployed_url: "https://elated-wiles-fa9b9c.netlify.app/",
    github_url: "https://github.com/1-618/crypto-gazer",
    category: ["react", "typescript"],
    tech_stack: ["React", "TypeScript"],
  },{
    id: 2,
    name: "KWIZZ-MEE! game",
    image_path: "/images/kwizz-mee.png",
    deployed_url: "https://zen-varahamihira-059069.netlify.app/",
    github_url: "https://github.com/1-618/kwizz-mee-client",
    category: ["react", "typescript", "node"],
    description:
      "A trivia game with 10 multiple choice questions from the Open trivia api",
    tech_stack: ["React", "Typescript", "Node.js", "Express"],
  },

  {
    id: 3,
    name: "Blog-chain",
    image_path: "/images/kwizz-mee.jpg",
    deployed_url: "https://zen-varahamihira-059069.netlify.app/",
    github_url: "https://github.com/1-618/kwizz-mee-client",
    category: ["node", "mongo", "react", "typescript"],
    description:
      "An open blog where anyone can sign up and post their thoughts on crypto",
    tech_stack: [
      "React",
      "Typescript",
      "Node.js",
      "MongoDB",
      "Firebase Auth",
      "Reactstrap",
    ],
  },

  {
    id: 4,
    name: "Game of Life",
    image_path: "/images/kwizz.jpg",
    deployed_url: "https://zen-varahamihira-059069.netlify.app/",
    github_url: "https://github.com/1-618/kwizz-mee-client",
    category: ["react", "typescript"],
    description:
      "Visualization of a celluar automation devised by John Horton Conway",
    tech_stack: ["React", "TypeScript"],
  },
]

