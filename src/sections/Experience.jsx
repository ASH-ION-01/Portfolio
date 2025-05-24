import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber'; // Assuming you're using react-three-fiber
import { workExperiences } from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import Canvasloader from "../components/canvasloader.jsx";
import Developer from "../components/Developer.jsx";
import { useState } from "react";
const Experience = () => {

    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>

                <div className="work-container flex flex-col md:flex-row gap-10">
                    <div className="work-canvas w-full md:w-1/2">
                        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5}/>
                            <directionalLight position={[0, 10, 5]} intensity={0.5} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/4} />
                            <Suspense fallback={<Canvasloader/>}>
                                <Developer scale={2} position={[0, -1, 0]} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content w-full md:w-1/2">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({ id, icon, name, pos, duration, title, animation }) => (
                                <div key={id} className="work-content_container group flex gap-5" onClick={()=>{
                                    setAnimationName(animation.toLowerCase());
                                }} onPointerOver={()=> setAnimationName(animation.toLowerCase())} onPointerOut={()=> setAnimationName('idle')}>
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo w-14 h-14">
                                            <img src={icon} alt={name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="work-content_bar h-full w-1 bg-white-500 mt-2" />
                                    </div>
                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800 text-lg">{name}</p>
                                        <p className="text-sm text-white-600 mb-2">
                                            {pos} &mdash; {duration}
                                        </p>
                                        <p className="text-white-400 group-hover:text-white transition ease-in-out duration-500">
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
