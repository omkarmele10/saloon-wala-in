import { motion } from "framer-motion";
import app from "/public/assets/app.png"
import play from "/public/assets/play.png"

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-bgColor pb-16">
            <div className="max-w-7xl mx-auto px-6  md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40, x: "-30%" }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="space-y-8"
                >
                    <h1 className="text-2xl md:text-3xl lg:text-7xl mt-5 font-bold leading-tight ">
                        One App for <br />
                        <span className="">
                            Multiple Services
                        </span>
                    </h1>

                    <p className=" text-gray-600 text-sm md:text-lg ">
                        Book salon & spa appointments, discover gyms, wellness services,
                        and everything you need — all in one powerful app.
                    </p>

                    <div className="md:flex gap-4 ">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className=" h-12 w-46  font-semibold shadow-lg cursor-pointer"
                        >
                            <img src={play} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="  h-12 w-46  shadow-lg font-semibold cursor-pointer mt-4 md:mt-0"
                        >
                            <img src={app} />
                        </motion.button>
                    </div>
                </motion.div>

                {/* RIGHT IMAGES */}
                <motion.div
                    initial={{ opacity: 0, x: 140 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ duration: 1, amount: 0.2 }}
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="relative flex justify-center"
                >
                    {/* Glow */}
                    <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full blur-3xl " />

                    <motion.img
                        src="/images/spa-mobile.png"
                        alt="Spa Service"
                        className="w-[140px] md:w-[280px] rounded-3xl shadow-2xl z-10"

                        transition={{ repeat: Infinity, duration: 4 }}
                    />

                    <motion.img
                        src="/images/salon-mobile.png"
                        alt="Salon Service"
                        className="w-[160px] md:w-[280px] rounded-3xl shadow-2xl translate-x-[-40px] translate-y-[40px]"

                        transition={{ repeat: Infinity, duration: 5 }}
                    />
                </motion.div>
            </div>

            {/* APP SCREEN */}
            {/* <motion.div
                // 1. Start off-screen to the left and invisible
                initial={{ opacity: 0, x: "-50%", scale: 0.6 }}
                // 2. Animate to this state when it enters the viewport
                whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
                // 3. This ensures it triggers every time you scroll in/out
                viewport={{ once: false, amount: 0.1 }}
                // 4. Smooth transition settings
                transition={{ duration: 0.8, ease: "easeOut" }}

                className="relative flex justify-center py-22"
            >
                <motion.img
                    src="/images/app-screen.png"
                    alt="App UI"
                    className="w-[75%] md:w-[350px] rounded-3xl shadow-2xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                <motion.img
                    src="/images/app-screen.png"
                    alt="App UI"
                    className="w-[75%] md:w-[350px] rounded-3xl shadow-2xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />

            </motion.div> */}
            {/* APP SHOWCASE SECTION (FIXED RESPONSIVENESS) */}
            {/* <div className="bg-white py-20  overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Inside the Interface</h2>
                        <p className="text-gray-500 mt-2">Smooth. Intuitive. Powerful.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.6 }}
                                whileInView={{ opacity: 1, y: 0, scale: 0.8 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                <motion.img
                                    src="public/assets/wallpaper1.png"
                                    alt={`App Screen ${item}`}
                                    className={`w-[260px] md:w-[300px] rounded-[2.5rem]  group-hover:shadow-2xl transition-shadow duration-500 `}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 4 + index,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div> */}
        </section >

    );
}