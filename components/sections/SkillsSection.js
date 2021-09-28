import React from "react";
import SectionTittle from "../SectionTittle";
import SkillCard from "../SkillCard";

export default function SkillsSection() {
  return (
    <section className="py-28 bg-abu" id="skill">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTittle tittle="Skills" subTittle="Beberapa kemampuan saya." />
        <div className="mt-20 grid grid-flow-row grid-cols-2 lg:grid-cols-3 gap-10">
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
      </div>
    </section>
  );
}
