import React from 'react';
import { clientReviews } from "../constants/index.js";

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">
                Hear From My Comrades
            </h3>

            <div className="client-container">
                {clientReviews.map(({ id, name, img, review, position }) => (
                    <div key={id} className="client-review">
                        <div>
                            <p className="text-white font-light">{review}</p>
                        </div>

                        <div className="client-content">
                            <div className="flex gap-3 items-center">
                                <img src={img} alt={name} className="w-12 h-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-gray-400">{name}</p>
                                    <p className="text-white-500 md:text-base text-sm">{position}</p>
                                </div>
                                <div className="flex self-end items-center gap-2 ml-auto">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
