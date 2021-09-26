import React from 'react';

import Button from '../Button';
import NavBar from '../NavBar';

export default function Hero() {
    return (
        <div className="bg-hero xl:h-[600px] 2xl:h-[712px]">
            <div className="container mx-auto">
                <NavBar />
                <div className="text-center mt-20">
                    <h1 className="text-white text-3xl font-semibold font-mono 2xl:w-6/12 w-8/12 mx-auto leading-relaxed">
                        Saya seorang front-end engineer, back-end engineer, dan juga UI
                        designer
                    </h1>
                    <p className="text-white text-lg text-opacity-60 w-4/12 2xl:w-3/12 mx-auto mt-6 leading-relaxed">
                        Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
                        design.
                    </p>
                    <Button className="mt-14" variant="rounded-yellow" pill href="#profile">
                        Pelajari
                    </Button>
                </div>
            </div>
        </div>
    );
};
