import React, { useState } from 'react';
import { navLinks } from "../constants/index.js";

const NavItems = ({ onLinkClick }) => {
    return (
        <ul className="nav-ul space-y-4 sm:space-y-0 sm:flex sm:space-x-6">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li text-white">
                    <a
                        href={href}
                        className="nav-li_a"
                        onClick={() => {
                            if (onLinkClick) onLinkClick();
                        }}
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isopen, setIsopen] = useState(false);

    const toggleMenu = () => {
        setIsopen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsopen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full h-16 bg-black/90 z-50 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Ashion
                    </a>

                    {/* Mobile toggle button */}
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={!isopen ? "assets/menu.svg" : "assets/close.svg"}
                            className="w-6 h-6"
                            alt="toggle"
                        />
                    </button>

                    {/* Desktop Nav */}
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>

                {/* Mobile Nav */}
                {isopen && (
                    <div className="sm:hidden bg-black/95 px-6 pb-4">
                        <NavItems onLinkClick={closeMenu} />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
