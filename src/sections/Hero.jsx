import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import Canvasloader from "../components/canvasloader.jsx";
// import { useControls } from 'leva';
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    // const x = useControls('HackerRoom', {
    //     positionX: { value: 2.5, min: -10, max: 10 },
    //     positionY: { value: 2.5, min: -100, max: 10 },
    //     positionZ: { value: 2.5, min: -10, max: 10 },
    //     rotationX: { value: 0, min: -10, max: 10 },
    //     rotationY: { value: 0, min: -10, max: 10 },
    //     rotationZ: { value: 0, min: -10, max: 10 },
    //     scale: { value: 1, min: 0.1, max: 2 },
    // });

    const issmall = useMediaQuery({ maxWidth: 440 });
    const ismobile = useMediaQuery({ maxWidth: 768 });
    const istablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(issmall, ismobile, istablet);

    return (
        <section className="min-h-screen w-full flex flex-col bg-[#00172D] relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Ashish Kumar <span className="waving-hand">👋</span>
                </p>

                <p className="hero_tag text-4xl font-bold text-white text-center font-generalsans">
                    Building Products and Brands
                </p>

                <div className="w-full h-full absolute inset-0">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<Canvasloader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <HeroCamera isMobile={ismobile}>
                                <HackerRoom
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                    scale={sizes.deskScale}
                                />
                            </HeroCamera>

                            <group>
                                <Target position={sizes.targetPosition} />
                                <ReactLogo position={[6, 7, -2]} />
                                <Cube position={[-6, 7, -2]} />
                                <Cube position={[5, -7, 2]} />
                            </group>

                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>

                <div className="absolute bottom-7 left-0 right-0 z-10 c-space">
                    <a href="#About" className="w-fit">
                        <Button name="let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
