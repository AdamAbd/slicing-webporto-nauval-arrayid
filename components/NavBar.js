import React from 'react';

import BtnYellow from './BtnYellow';
import Logo from './Logo';
import Nav from './Nav';

export default function NavBar() {
    return (
        <div className="flex items-center py-10">
            <div className="w-3/12">
                <Logo />
            </div>
            <div className="w-6/12">
                <Nav />
            </div>
            <div className="w-3/12 text-right">
                <BtnYellow variant="outline-yellow">Login</BtnYellow>
            </div>
        </div>
    );
};
