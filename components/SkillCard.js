import React from 'react';

export default function SkillCard({ imgSource, imgRounded, tittle, level }) {
    const addImgRounded = imgRounded ? ` ${imgRounded}` : "";

    return (
        <div className="bg-white shadow-item-skill rounded-lg p-8 flex items-center">
            <img loading="lazy" src={imgSource} alt={imgSource} className={`h-16 ${addImgRounded} mr-6`} />
            <div>
                <h4 className="text-lg font-semibold">{tittle}</h4>
                <p className="text-sm font-semibold text-gray-400 mt-1">{level}</p>
            </div>
        </div>
    );
};
