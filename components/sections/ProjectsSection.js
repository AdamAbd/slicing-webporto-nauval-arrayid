import React from "react";
import ProjectCard from "../ProjectCard";
import SectionTittle from "../SectionTittle";

export default function ProjectsSection() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <SectionTittle
          tittle="Projects"
          subTittle="Beberapa proyek bikinan saya."
        />
        <div className="mt-20 grid grid-flow-row grid-cols-2 grid-rows-2 gap-10">
          <ProjectCard
            img="/hasten.png"
            tittle="Hasten"
            desc="Explorasi Landing Page"
          />
          <ProjectCard
            img="/resource.png"
            tittle="Resources"
            desc="Explorasi Resources Page"
          />
          <ProjectCard
            img="/resource.png"
            tittle="Resources"
            desc="Explorasi Resources Page"
          />
          <ProjectCard
            img="/hasten.png"
            tittle="Hasten"
            desc="Explorasi Landing Page"
          />
        </div>
      </div>
    </section>
  );
}
