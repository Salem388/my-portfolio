"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/legacy/image";
import { projects } from "@/data";
import dynamic from "next/dynamic";
const PinContainer = dynamic(() =>
  import("@/components/ui/Pin").then((mod) => mod.PinContainer)
);

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

interface ProjectCardProps {
  item: Project;
}

interface ProjectImageProps {
  img: string;
}

interface ProjectTitleProps {
  title: string;
}

interface ProjectDescriptionProps {
  des: string;
}

interface ProjectIconsProps {
  iconLists: string[];
}

interface IconProps {
  icon: string;
  index: number;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => (
  <div className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-96 lg:w-[33rem] w-[80vw]">
    <PinContainer title={item.title} href={item.link}>
      <ProjectImage img={item.img} />
      <ProjectTitle title={item.title} />
      <ProjectDescription des={item.des} />
      <ProjectIcons iconLists={item.iconLists} />
    </PinContainer>
  </div>
);

const ProjectImage: React.FC<ProjectImageProps> = ({ img }) => (
  <div className="relative flex items-center justify-center sm:w-96 lg:w-[33rem] w-[80vw]  h-[20vh] lg:h-[30vh] mb-10">
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

const ProjectTitle: React.FC<ProjectTitleProps> = ({ title }) => (
  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
    {title}
  </h1>
);

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ des }) => (
  <p
    className=" lg:font-normal font-light text-base line-clamp-2"
    style={{ color: "#BEC1DD", margin: "1vh 0" }}
  >
    {des}
  </p>
);

const ProjectIcons: React.FC<ProjectIconsProps> = ({ iconLists }) => (
  <div className="flex items-center justify-between mt-7 mb-3 ">
    <IconList iconLists={iconLists} />
    <CheckLiveSite />
  </div>
);

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
        A Small Selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
