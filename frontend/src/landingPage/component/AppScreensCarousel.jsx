import { useEffect, useState } from "react";
import bg1 from "../../../public/assets/"
const screenshots = [
    "../../../public/assets/wallpaper1.png",
    "../../../public/assets/wallpaper1.png",
    "../../../public/assets/wallpaper1.png",
    "../../../public/assets/wallpaper1.png",
    "../../../public/assets/wallpaper1.png",
    "../../../public/assets/wallpaper1.png",
    "../../../public/assets/wallpaper1.png",
];
const positions = [
    { x: -420, scale: 0.6, z: 5 },
    { x: -280, scale: 0.73, z: 10 },
    { x: -140, scale: 0.85, z: 20 },
    { x: 0, scale: 1, z: 30 }, // CENTER
    { x: 140, scale: 0.85, z: 20 },
    { x: 280, scale: 0.73, z: 10 },
    { x: 420, scale: 0.6, z: 5 },
];
export default function AppScreensCarousel() {
    const [active, setActive] = useState(3);
    // auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % screenshots.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-14 overflow-hidden">
            {/* Heading */}
            <div className="text-center p-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    Explore Our App
                </h2>
                <p className="text-gray-600 mt-4">
                    A quick look at the app experience
                </p>
            </div>

            {/* Carousel */}
            <div className="relative flex items-center justify-center h-[40vh] w-full  md:my-24">
                {screenshots.map((img, index) => {
                    const posIndex =
                        (index - active + positions.length) % positions.length;
                    const pos = positions[posIndex];

                    return (
                        <div
                            key={index}
                            className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                            style={{
                                transform: `translateX(${pos.x}px) scale(${pos.scale})`,
                                zIndex: pos.z,
                            }}
                            onClick={() => setActive(index)}
                        >
                            <div
                                className="
                  relative rounded-2xl overflow-hidden 
                  w-[160px] h-[280px]
                  sm:w-[200px] sm:h-[360px]
                  md:w-[240px] md:h-[400px]
                  lg:w-[287px] lg:h-[500px]
                  shadow-2xl
                "
                            >
                                {/* Screenshot */}
                                <img
                                    src={img}
                                    alt="App Screenshot"
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark overlay for side cards */}
                                {pos.z !== 30 && (
                                    <div className="absolute inset-0 bg-black/60" />
                                )}

                                {/* Caption for center */}
                                {pos.z === 30 && (
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-black/70 text-white text-sm sm:text-base px-4 py-2 rounded-xl text-center">
                                            Book services in seconds
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
