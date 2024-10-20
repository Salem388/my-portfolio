import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/legacy/image";
import { socialMedia } from "@/data";
import dynamic from "next/dynamic";
const MagicButton = dynamic(() => import("@/components/MagicButton"));
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-0 min-h-96">
        <Image
          src={"/footer-grid.svg"}
          alt={"Decorative grid background"}
          layout="fill"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to Elevate <span className="text-purple">Your</span> Digital
          Presence?
        </h1>
        <p className="text-white md:mt-10 my-5 text-center">
          Contact me today, and let&apos;s bring your vision to life.
        </p>
        <a href="mailto:salemmohamed7300@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Salem Mohamed
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <Link href={link}>
              <div
                key={id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-black"
              >
                <Image src={img} alt={`${id} icon`} width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
