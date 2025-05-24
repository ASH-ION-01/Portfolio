import React from 'react';
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () =>{
        navigator.clipboard.writeText('Ashishableo12@gmail.com');

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    return (
        <section className="text-2xl c-space my-20 text-white" id="About">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I am Ashish Kumar</p>
                            <p className="grid-subtext">I'm a passionate full-stack developer. Let's build something amazing together.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain rounded-full" />
                        <div>
                            <p className="grid-headtext">Creative Developer</p>
                            <p className="grid-subtext">Crafting intuitive user interfaces with modern technologies.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    {
                                        lat: 28.69093256763295,
                                        lng: 77.11337120329846,
                                        text: 'Hello from the globe!',
                                        color: 'green',
                                        size: 30
                                    }
                                ]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I Can Work From Anywhere. </p>
                            <p className="grid-subtext">Building meaningful digital experiences from anywhere in the world.</p>
                            <Button name="Contact Me" isBeam={true} containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className=" col-span-2 xl:row-span-3">
                    <div className=" grid-container">
                        <img src=" /assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                       <div>
                           <p className="grid-headtext">I love to code.</p>
                           <p className="grid-subtext">
                               Building seamless digital experiences is more than just work — it's what excites me every single day.
                               From designing intuitive UIs to optimizing backend performance, I strive to write code that not only works but feels right.
                           </p>
                       </div>
                    </div>
                </div>

                <div className=" col-span-1 xl:row-span-2">
                    <div className=" grid-container">
                        <img src=" /assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] h-fit object-cover sm:object-top"/>
                       <div>
                           <p className=" grid-headtext"> Let's be in Touch!.</p>
                           <div className=" copy-container" onClick={handleCopy}>
                               <img src= { hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy"/>
                               <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white ">Ashishableo12gmai.com</p>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
