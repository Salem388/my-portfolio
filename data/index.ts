export interface navItem {
  name: string;
  link: string;
}

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I emphasize client collaboration to deliver tailored solutions.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Flexible in communication and always improving to stay ahead in web development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "A tech enthusiast committed to creating clean, responsive, and scalable web applications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing a JavaScript-based healthcare management app.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Health Care Management System",
    des: "Streamlines patient registration, appointment scheduling, and medical records, and learn to implement complex forms and SMS notifications",
    img: "/p1-n.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://care-hub.vercel.app",
  },
  {
    id: 2,
    title: "AI Prompt Sharing Platform",
    des: "Showcases Next.js features, implements a CRUD system for AI prompts, and integrates NextAuth for authentication.",
    img: "/prompt.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg"],
    link: "https://promptopia-ten-coral.vercel.app/",
  },
  {
    id: 3,
    title: "Vanlife App",
    des: "A web app that showcases van rentals, allowing users to browse, search, and rent vehicles. It offers a smooth experience for finding vans and booking the perfect option for their next adventure.",
    img: "/vanlife.png",
    iconLists: ["/re.svg", "/css.svg", "/js.svg"],
    link: "https://vanlife-22.netlify.app/",
  },
  {
    id: 4,
    title: "TodoList with Drag & Drop",
    des: "A simple interactive to-do list app that lets users add, edit, delete, reorder, and drag-and-drop tasks. Tasks can be moved between Active and Completed sections easily.",
    img: "/todolist.png",
    iconLists: ["/re.svg", "/ts.svg", "/css.svg"],
    link: "https://taskify-typescript.netlify.app/",
  },
  {
    id: 5,
    title: "Guess The Word Game",
    des: "A fun word-guessing game built using JavaScript, HTML, and CSS. The player has 6 attempts and 2 hints to guess the correct word, with feedback provided after each guess.",
    img: "/guess-word.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://venerable-praline-023a9f.netlify.app",
  },
  {
    id: 6,
    title: "Tenzy Game",
    des: "Tenzy is a fun dice-rolling game built with React. The goal is to roll all dice until they match. You can freeze dice by clicking on them between rolls. Track your rolls and time, and aim to beat your best score!",
    img: "/tenzy-2.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://tenzy-game-salem.netlify.app/",
  },
  {
    id: 7,
    title: "Memory Game Blocks",
    des: "A fun memory-based game built using JavaScript, HTML, and CSS. Players flip two blocks at a time to find matching pairs. The game tracks the number of wrong attempts and displays results at the end of the game session.",
    img: "/memory-game.jpeg",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://salem388.github.io/memory-game-blocks/",
  },
  {
    id: 8,
    title: "Bondi Theme",
    des: "A colorful and modern landing page designed for a small agency, converted from a Graphberry PSD template into a responsive website using HTML and Bootstrap. Featuring a clean, minimalist style with flat colors, it ensures a professional appearance across all web browsers.",
    img: "/bondi-2.png",
    iconLists: ["/html.svg", "/bootstrap.svg"],
    link: "https://salem388.github.io/bonid-theme/",
  },
];

export const testimonials = [
  {
    quote:
      "Salem and I collaborated on a project. He has deep technical expertise and innovative problem-solving skills. His dedication to delivering high-quality code and his proactive approach were instrumental in the project's success. Salem's ability to work both independently and collaboratively was invaluable, and he consistently met deadlines with well-crafted solutions. His clear communication and willingness to take on challenges made him a trusted team member.",
    name: "Mohamed Rajab",
    title: "Backend Engineer",
  },
  {
    quote:
      "Salem and I collaborated on a project. He has deep technical expertise and innovative problem-solving skills. His dedication to delivering high-quality code and his proactive approach were instrumental in the project's success. Salem's ability to work both independently and collaboratively was invaluable, and he consistently met deadlines with well-crafted solutions. His clear communication and willingness to take on challenges made him a trusted team member.",
    name: "Mohamed Rajab",
    title: "Backend Engineer",
  },
  {
    quote:
      "Salem and I collaborated on a project. He has deep technical expertise and innovative problem-solving skills. His dedication to delivering high-quality code and his proactive approach were instrumental in the project's success. Salem's ability to work both independently and collaboratively was invaluable, and he consistently met deadlines with well-crafted solutions. His clear communication and willingness to take on challenges made him a trusted team member.",
    name: "Mohamed Rajab",
    title: "Backend Engineer",
  },
  {
    quote:
      "Salem and I collaborated on a project. He has deep technical expertise and innovative problem-solving skills. His dedication to delivering high-quality code and his proactive approach were instrumental in the project's success. Salem's ability to work both independently and collaboratively was invaluable, and he consistently met deadlines with well-crafted solutions. His clear communication and willingness to take on challenges made him a trusted team member.",
    name: "Mohamed Rajab",
    title: "Backend Engineer",
  },
  {
    quote:
      "Salem and I collaborated on a project. He has deep technical expertise and innovative problem-solving skills. His dedication to delivering high-quality code and his proactive approach were instrumental in the project's success. Salem's ability to work both independently and collaboratively was invaluable, and he consistently met deadlines with well-crafted solutions. His clear communication and willingness to take on challenges made him a trusted team member.",
    name: "Mohamed Rajab",
    title: "Backend Engineer",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer (Side Projects)",
    desc: "Assisted in developing several web applications using React.js and Next.js, focusing on improving interactivity and responsiveness.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Salem388",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.google.com/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/salem-mohamed-2bbaa3245/",
  },
];
