import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="relative py-24 px-6 bg-secondary/10 overflow-hidden">

            {/* Decorative Blur */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-2xl md:text-3xl font-extrabold  mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our{" "}
                        <span className="text-primary">Mission</span> &{" "}
                        <span className="text-secondary">Vision</span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 max-w-3xl mx-auto "
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        We are building a modern spa & salon multivendor platform that
                        connects customers with trusted beauty, grooming, and wellness
                        professionals across cities.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* MISSION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.03 }}
                        className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-primary/20"
                    >
                        <div className="absolute inset-0 rounded-3xl bg-primary/5 pointer-events-none" />

                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-primary text-white p-4 rounded-2xl shadow-lg">
                                    <Target size={26} />
                                </div>
                                <h3 className="text-2xl font-semibold text-[--color-dark]">
                                    Our Mission
                                </h3>
                            </div>

                            <p className="text-gray-700 leading-relaxed ">
                                Our mission is to simplify how people discover, compare, and
                                book spa & salon services. We aim to empower customers with
                                transparent choices while helping salon and spa owners grow
                                their businesses through technology.
                            </p>
                        </div>
                    </motion.div>

                    {/* VISION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-secondary/30"
                    >
                        <div className="absolute inset-0 rounded-3xl bg-secondary/5 pointer-events-none" />

                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-secondary text-white p-4 rounded-2xl shadow-lg">
                                    <Eye size={26} />
                                </div>
                                <h3 className="text-2xl font-semibold ">
                                    Our Vision
                                </h3>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-sm">
                                Our vision is to become the most trusted spa & salon multivendor
                                ecosystem, where customers can access premium wellness services
                                effortlessly and vendors can manage bookings, grow visibility,
                                and deliver exceptional experiences.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
