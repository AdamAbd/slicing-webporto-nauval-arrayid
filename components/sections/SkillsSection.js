import React from "react";
import SectionTittle from "../SectionTittle";
import SkillCard from "../SkillCard";

export default function SkillsSection() {
  return (
    <section className="py-28 bg-abu">
      <div className="container mx-auto">
        <SectionTittle tittle="Skills" subTittle="Beberapa kemampuan saya." />
        <div className="mt-20 grid grid-flow-row grid-cols-3 grid-rows-3 gap-10">
          <SkillCard
            imgSource="/javascript.svg"
            imgRounded="rounded-full"
            tittle="JavaScript"
            level="Pemula"
          />
          <SkillCard
            imgSource="/react.svg"
            tittle="React JS"
            level="Menengah"
          />
          <SkillCard
            imgSource="/nodejs.svg"
            tittle="Node JS"
            level="Lanjutan"
          />
          <SkillCard
            imgSource="/nodejs.svg"
            tittle="Node JS"
            level="Lanjutan"
          />
          <SkillCard
            imgSource="/javascript.svg"
            imgRounded="rounded-full"
            tittle="JavaScript"
            level="Pemula"
          />
          <SkillCard
            imgSource="/react.svg"
            tittle="React JS"
            level="Menengah"
          />
          <SkillCard
            imgSource="/react.svg"
            tittle="React JS"
            level="Menengah"
          />
          <SkillCard
            imgSource="/nodejs.svg"
            tittle="Node JS"
            level="Lanjutan"
          />
          <SkillCard
            imgSource="/javascript.svg"
            imgRounded="rounded-full"
            tittle="JavaScript"
            level="Pemula"
          />
        </div>
        {/* <div className="flex mt-10 -mx-4">
          <div className="w-4/12 px-4">
            <SkillCard
              imgSource="/javascript.svg"
              imgRounded="rounded-full"
              tittle="JavaScript"
              level="Lanjutan"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              imgSource="/react.svg"
              tittle="JavaScript"
              level="Lanjutan"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              imgSource="/nodejs.svg"
              tittle="JavaScript"
              level="Lanjutan"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
