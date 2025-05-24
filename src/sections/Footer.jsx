import React from 'react';

const Footer = () => {
    return (
        <section className="c-space pt-10 pb-3  border-t border-black-300 flex flex-col md:flex-row justify-between items-center text-white-500">
            <div className="flex flex-col md:flex-row gap-2 items-center">
                <p className="text-sm">&copy; 2023</p>
                <p className="text-sm">All Rights Reserved</p>
            </div>

            <div className="flex gap-4 mt-3 md:mt-0">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/github.svg" alt="GitHub" className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/twitter.svg" alt="Twitter" className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/instagram.svg" alt="Instagram" className="w-5 h-5" />
                </a>
            </div>

            <p className="text-sm mt-3 md:mt-0">Developer Since @2021</p>
        </section>
    );
};

export default Footer;
