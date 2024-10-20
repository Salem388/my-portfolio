//

"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import dynamic from "next/dynamic";
const InfiniteMovingCards = dynamic(() =>
  import("@/components/ui/InfiniteCards").then((mod) => mod.InfiniteMovingCards)
);

interface Company {
  id: number;
  img: string;
  nameImg: string;
  name: string;
}

const Clients: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind feedback from
        <span className="text-purple"> satisfied collaborators</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
