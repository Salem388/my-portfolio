// 




"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";

interface Company {
  id: number;
  img: string;
  nameImg: string;
  name: string;
}

const Clients: React.FC = () => {
  // CompanyLogo component logic embedded within the Clients component
  const CompanyLogo: React.FC<Company> = ({ img, nameImg, name, id }) => (
    <div className="flex md:max-w-60 max-w-32 gap-2">
      <Image
        src={img}
        alt={name}
        width={50}
        height={50}
        className="md:w-10 w-5"
      />
      <Image
        src={nameImg}
        alt={name}
        width={id === 4 || id === 5 ? 100 : 150}
        height={id === 4 || id === 5 ? 100 : 150}
        className="md:w-24 w-20"
      />
    </div>
  );

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <CompanyLogo
              key={company.id}
              img={company.img}
              nameImg={company.nameImg}
              name={company.name}
              id={company.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
