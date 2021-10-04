import React from 'react';
import Link from 'next/link'

export default function NavItem({ href, children }) {
    return (
        <li><Link href={href}><a className="text-white text-lg text-opacity-60 hover:text-opacity-100 transition font-semibold">{children}</a></Link></li>
    );
};
