import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-[--color-secondary]">
            <div className="max-w-7xl mx-auto px-6  md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <h1 className="text-2xl md:text-3xl mt-5 font-bold leading-tight ">
                        One App for <br />
                        <span className="text-[--color-primary]">
                            Multiple Services
                        </span>
                    </h1>

                    <p className=" text-gray-600 ">
                        Book salon & spa appointments, discover gyms, wellness services,
                        and everything you need — all in one powerful app.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary text-white px-8 py-4 rounded-full font-semibold shadow-lg"
                        >
                            Get Started
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border hover:text-white hover:bg-primary text-[--color-primary] px-8 py-4 rounded-full font-semibold"
                        >
                            View App
                        </motion.button>
                    </div>
                </motion.div>

                {/* RIGHT IMAGES */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative flex justify-center"
                >
                    {/* Glow */}
                    <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full blur-3xl" />

                    <motion.img
                        src="/images/spa-mobile.png"
                        alt="Spa Service"
                        className="w-[140px] md:w-[280px] rounded-3xl shadow-2xl z-10"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                    />

                    <motion.img
                        src="/images/salon-mobile.png"
                        alt="Salon Service"
                        className="w-[160px] md:w-[280px] rounded-3xl shadow-2xl translate-x-[-40px] translate-y-[40px]"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                    />
                </motion.div>
            </div>

            {/* APP SCREEN */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative flex justify-center py-22"
            >
                <motion.img
                    src="/images/app-screen.png"
                    alt="App UI"
                    className="w-[75%] md:w-[350px] rounded-3xl shadow-2xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                />
            </motion.div>
        </section>
    );
}
