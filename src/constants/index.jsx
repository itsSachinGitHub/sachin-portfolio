import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";
import { SiCredly } from "react-icons/si";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Sachin Chauhan",
  greet: "Hello there! 👋🏻",
  description:
    "I am B.Tech IT graduate specializing in Software Engineering, with expertise in Python, AWS, and Linux. Skilled in programming, cloud-based development, networking, and security. Eager to apply my technical skills and passion for innovation in an entry-level engineering role.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/itsSachinGitHub/sachin-portfolio",
  },
  {
    id: 2,
    name: "E-Mart App",
    description:
      "An e-mart web application developed and containerized using DockerFiles.",
    image: projectImage2,
    githubLink: "https://github.com/itsSachinGitHub/E-mart-App",
  },
  {
    id: 3,
    name: "3-Tier Web Architecture on AWS",
    description:
      " Deployed a scalable web architecture on AWS using various AWS resources.",
    image: projectImage3,
    githubLink: "https://github.com/itsSachinGitHub/AWS-3-tier-web-architecture",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application including user authentication, chat rooms, and instant messaging features. Built with React.",
    image: projectImage6,
    githubLink: "",
  },
];

export const BIO = [
  "I am a B.Tech IT graduate with hands-on experience in cloud computing, programming, and web development. Currently, as an Cloud Engineer intern at Digital Hercules Innovations, I manage and optimize AWS infrastructure .",
  "I completed the AWS re/Start program, gaining expertise in core AWS services and IT fundamentals, including Python and Shell scripting.",
  "I hold certifications in AWS Cloud Practitioner, DevOps, Web Development and have a solid foundation in data structures and algorithms. I am excited to leverage my skills in a dynamic software engineering role.",
];

export const SKILLS = [
  {
    icon: <FaAws className="text-4xl text-white lg:text-5xl" />,
    name: "AWS",
    experience: <FaJenkins className="text-4xl text-cyan-400 lg:text-5xl"/>,
    names: "Jenkins"
  },
  {
    icon: <FaPython className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Python",
    experience: <SiTerraform className="text-4xl text-indigo-600 lg:text-5xl" />,
    names: "Terraform"
  },
  {
    icon: <FaLinux className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Linux",
    experience: <SiKubernetes className="text-4xl text-blue-500 lg:text-5xl" />,
    names: "Kubernetes"
  },
  {
    icon: <SiMysql className="text-4xl text-sky-600 lg:text-5xl" />,
    name: "SQL",
    experience: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    names: "React"
  },
  {
    icon: <FaGitAlt className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Git",
    experience: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    names: "Node.js"
  },
  // {
  //   icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
  //   name: "PostgreSQL",
  //   experience: "",
  // },
];

export const EXPERIENCES = [
  {
    title: "Cloud Engineer Intern",
    company: "Digital Hercules Innovations",
    duration: "July 2024 - Present",
    description:
      "As the Cloud Engineer, I am assisting with AWS Cloud infrastructure management. Also monitoring and optimizing performance, ensuring security compliance, and collaborating on troubleshooting and resolving cloud-related issues.",
  },
  {
    title: "AWS re/Start Trainee",
    company: "",
    duration: "October 2023 - February 2024",
    description:
      "Completed intensive training in IT fundamentals, AWS Cloud, and professional skills. Gained hands-on experience with Linux, Python, and Shell scripting, and mastered core AWS services. Developed strong communication skills for explaining technical concepts to non-technical audiences.",
  }
  // {
  //   title: "Junior Web Developer",
  //   company: "Bright Future Technologies",
  //   duration: "August 2014 - January 2016",
  //   description:
  //     "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  // },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Graphic Era Hill University",
    duration: "June 2019 - June 2023",
    description:
      "Successfully completed my Bachelors, gaining comprehensive skills in software development, database management, and networking. This academic journey, complemented by practical projects and internships, has prepared me to tackle real-world challenges and contribute effectively to the tech industry.",
  },
  // {
  //   degree: "Bachelor of Science in Information Technology",
  //   institution: "University of California, Berkeley",
  //   duration: "September 2008 - June 2012",
  //   description:
  //     "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  // },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/itsSachinGitHub",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sachin00/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.credly.com/users/sachin0",
    icon: <SiCredly fontSize={35} className="hover:opacity-80" />,
  },
];
