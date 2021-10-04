import React from 'react';

export default function ProjectCard({ img, tittle, desc }) {
    return (
        <article className="text-center">
            <img loading="lazy" src={img} alt="" className="w-full rounded-lg" />
            <h3 className="text-xl font-semibold mt-4 mb-1">{tittle}</h3>
            <p className="text-lg text-gray-400">{desc}</p>
        </article>
    );
};
