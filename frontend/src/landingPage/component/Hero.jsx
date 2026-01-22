import { motion } from "framer-motion";
import app from "/public/assets/app.png";
import play from "/public/assets/play.png";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-bgColor pb-10">
            <div className="max-w-7xl mx-auto px-6 md:py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40, x: "-30%" }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="grid gap-8 p-1"
                >
                    <h1 className="text-3xl lg:text-5xl mt-5 font-extrabold tracking-tight leading-tight text-primary">
                        One App for <br />
                        <span className="text-black font-semibold">Multiple Services</span>
                    </h1>

                    <p className="text-gray-600 text-sm md:text-lg">
                        Book salon & spa appointments, discover gyms, wellness services,
                        and everything you need — all in one app.
                    </p>

                    {/* STATS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-3 gap-6"
                    >
                        <div>
                            <p className="text-2xl  font-bold text-primary">200K+</p>
                            <p className="text-xs md:text-sm text-gray-500">Active Users</p>
                        </div>
                        <div>
                            <p className="text-2xl  font-bold text-primary">5K+</p>
                            <p className="text-xs md:text-sm text-gray-500">Verified Partners</p>
                        </div>
                        <div>
                            <p className="text-2xl  font-bold text-primary">Available</p>
                            <p className="text-xs md:text-sm text-gray-500">in Bhopal</p>
                        </div>
                    </motion.div>

                    {/* FEATURE TAGS */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-2"
                    >
                        <span className="px-2 py-2 rounded-full bg-white shadow text-sm text-gray-700">
                            ⚡ Instant Booking
                        </span>

                        <span className="px-2 py-2 rounded-full bg-white shadow text-sm text-gray-700">
                            🔒 Secure Payments
                        </span>
                        <span className="px-2 py-2 rounded-full bg-white shadow text-sm text-gray-700">
                            ✅ Verified Professionals
                        </span>
                    </motion.div>

                    {/* BUTTONS */}
                    <div className="flex gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-6 md:h-12 md:w-46 shadow-lg cursor-pointer"
                        >
                            <img src={play} alt="Get it on Play Store" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-6 md:h-12 md:w-46 shadow-lg cursor-pointer"
                        >
                            <img src={app} alt="Download on App Store" />
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
                        className="w-[112px] md:w-[224px] rounded-3xl shadow-2xl z-10"

                        transition={{ repeat: Infinity, duration: 4 }}
                    />

                    <motion.img
                        src="/images/salon-mobile.png"
                        alt="Salon Service"
                        className="w-[128px] md:w-[224px] rounded-3xl shadow-2xl translate-x-[-30px] translate-y-[30px]"

                        transition={{ repeat: Infinity, duration: 5 }}
                    />
                </motion.div>

            </div>
        </section>
    );
}
