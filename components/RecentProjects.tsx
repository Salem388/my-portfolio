// "use client";

// import { FaLocationArrow } from "react-icons/fa6";

// import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";

// const RecentProjects = () => {
//   return (
//     <div className="py-20">
//       <h1 className="heading">
//         A small selection of{" "}
//         <span className="text-purple">recent projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
//         {projects.map((item) => (
//           <div
//             className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
//             key={item.id}
//           >
//             <PinContainer
//               title="/ui.aceternity.com"
//               href="https://twitter.com/mannupaaji"
//             >
//               <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
//                 <div
//                   className="relative w-full h-full overflow-hidden lg:rounded-3xl"
//                   style={{ backgroundColor: "#13162D" }}
//                 >
//                   <img src="/bg.png" alt="bgimg" />
//                 </div>
//                 <img
//                   src={item.img}
//                   alt="cover"
//                   className="z-10 absolute bottom-0"
//                 />
//               </div>

//               <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//                 {item.title}
//               </h1>

//               <p
//                 className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
//                 style={{
//                   color: "#BEC1DD",
//                   margin: "1vh 0",
//                 }}
//               >
//                 {item.des}
//               </p>

//               <div className="flex items-center justify-between mt-7 mb-3">
//                 <div className="flex items-center">
//                   {item.iconLists.map((icon, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <img src={icon} alt="icon5" className="p-2" />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-center items-center">
//                   <p className="flex lg:text-xl md:text-xs text-sm text-purple">
//                     Check Live Site
//                   </p>
//                   <FaLocationArrow className="ms-3" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;
 





"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

// Define the Project type
interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
}

// Define the ProjectCardProps type
interface ProjectCardProps {
  item: Project;
}

// Define the ProjectImageProps type
interface ProjectImageProps {
  img: string;
}

// Define the ProjectTitleProps type
interface ProjectTitleProps {
  title: string;
}

// Define the ProjectDescriptionProps type
interface ProjectDescriptionProps {
  des: string;
}

// Define the ProjectIconsProps type
interface ProjectIconsProps {
  iconLists: string[];
}

// Define the IconProps type
interface IconProps {
  icon: string;
  index: number;
}
// Extract the ProjectCard component
const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => (
  <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
    <PinContainer
      title="/ui.aceternity.com"
      href="https://twitter.com/mannupaaji"
    >
      <ProjectImage img={item.img} />
      <ProjectTitle title={item.title} />
      <ProjectDescription des={item.des} />
      <ProjectIcons iconLists={item.iconLists} />
    </PinContainer>
  </div>
);

// Extract the ProjectImage component
const ProjectImage: React.FC<ProjectImageProps> = ({ img }) => (
  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
    <div
      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
      style={{ backgroundColor: "#13162D" }}
    >
      <Image src={"/bg.png"} alt="bgimg" layout="fill" objectFit="contain" />
    </div>

    <Image
      src={img}
      alt="cover"
      className="z-10 absolute bottom-0"
      layout="fill"
      objectFit="cover"
    />
  </div>
);

// Extract the ProjectTitle component
const ProjectTitle: React.FC<ProjectTitleProps> = ({ title }) => (
  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
    {title}
  </h1>
);

// Extract the ProjectDescription component
const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ des }) => (
  <p
    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
    style={{ color: "#BEC1DD", margin: "1vh 0" }}
  >
    {des}
  </p>
);

// Extract the ProjectIcons component
const ProjectIcons: React.FC<ProjectIconsProps> = ({ iconLists }) => (
  <div className="flex items-center justify-between mt-7 mb-3">
    <IconList iconLists={iconLists} />
    <CheckLiveSite />
  </div>
);

// Further break down into smaller components if necessary
const IconList: React.FC<ProjectIconsProps> = ({ iconLists }) => (
  <div className="flex items-center">
    {iconLists.map((icon, index) => (
      <Icon key={index} icon={icon} index={index} />
    ))}
  </div>
);

const Icon: React.FC<IconProps> = ({ icon, index }) => (
  <div
    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
    style={{ transform: `translateX(-${5 * index + 2}px)` }}
  >
    <Image src={icon} alt="icon5" className="p-2" layout="fill" />
  </div>
);

const CheckLiveSite: React.FC = () => (
  <div className="flex justify-center items-center">
    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
      Check Live Site
    </p>
    <FaLocationArrow className="ms-3" color="#CBACF9" />
  </div>
);

const RecentProjects: React.FC = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;










