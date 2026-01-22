import { motion } from "framer-motion";
import app from "/public/assets/app.png"
import play from "/public/assets/play.png"

export default function Hero() {
    return (
        <section id="download" className="w-ful  bg-bgColor p-10">
            <div className="max-w-7xl mx-auto px-6  md:py-10  flex justify-center items-center text-center">

                {/* LEFT CONTENT */}
                <div
                    className="space-y-4"
                >
                    <h1 className="text-3xl md:text-4xl  font-bold text-slate-900 mb-4 tracking-tight ">
                        <span className="text-primary">  Book spa & salon /</span>services instantly
                    </h1>

                    <p className=" text-gray-600 ">
                        Download on Google Play & App Store
                    </p>

                    <div className="flex gap-4 flex items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className=" text-white h-6 md:h-12 md:w-46  font-semibold shadow-lg cursor-pointer"
                        >
                            <img src={play} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className=" hover:text-white h-6 md:h-12 md:w-46  shadow-lg font-semibold cursor-pointer"
                        >
                            <img src={app} />
                        </motion.button>
                    </div>
                </div>
            </div>

        </section >
    )
};
