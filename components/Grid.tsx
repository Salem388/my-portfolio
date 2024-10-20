import { gridItems } from "@/data";
import dynamic from "next/dynamic";
const BentoGrid = dynamic(() =>
  import("@/components/ui/BentoGrid").then((mod) => mod.BentoGrid)
);
const BentoGridItem = dynamic(() =>
  import("@/components/ui/BentoGrid").then((mod) => mod.BentoGridItem)
);

import React from "react";

const Grid: React.FC = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
