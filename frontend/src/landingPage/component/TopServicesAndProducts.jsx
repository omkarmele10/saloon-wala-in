import { motion } from "framer-motion";
import {
    Sparkles,
    Scissors,
    Droplet,
    Wind,
    Sun,
} from "lucide-react";

/* ===================== DATA ===================== */

const services = {
    spa: [
        {
            name: "Full Body Massage",
            image:
                "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800",
        },
        {
            name: "Aroma Therapy",
            image:
                "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
        },
        {
            name: "Facial & Cleanup",
            image:
                "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=800",
        },
        {
            name: "Head Massage",
            image:
                "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800",
        },
    ],
    salon: [
        {
            name: "Haircut & Styling",
            image:
                "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=800",
        },
        {
            name: "Beard Trim",
            image:
                "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800",
        },
        {
            name: "Hair Spa",
            image:
                "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800",
        },
        {
            name: "Hair Coloring",
            image:
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800",
        },
    ],
};

const products = [
    {
        name: "Hair Serum",
        desc: "Smoothens frizz & adds natural shine",
        tag: "Hair Care",
        badge: "Best Seller",
    },
    {
        name: "Face Cleanser",
        desc: "Deep cleansing for fresh glowing skin",
        tag: "Skin Care",
    },
    {
        name: "Massage Oils",
        desc: "Relaxes muscles & improves circulation",
        tag: "Body Care",
        badge: "Pro Choice",
    },
    {
        name: "Hair Wax",
        desc: "Strong hold with a natural finish",
        tag: "Styling",
    },
    {
        name: "Skin Glow Cream",
        desc: "Hydration for radiant & healthy skin",
        tag: "Skin Care",
    },
];

const productIcons = {
    "Hair Serum": Droplet,
    "Face Cleanser": Sparkles,
    "Massage Oils": Wind,
    "Hair Wax": Scissors,
    "Skin Glow Cream": Sun,
};

/* ===================== ANIMATIONS ===================== */

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ===================== COMPONENT ===================== */

export default function TopServicesAndProducts() {
    return (
        <motion.section
            id="services"
            className="bg-gray-50 py-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION TITLE */}
                <motion.div className="text-center mb-16" variants={item}>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                        Top Services & Products
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Most booked spa & salon experiences loved by our customers
                    </p>
                </motion.div>

                {/* SERVICES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* SPA */}
                    <motion.div className="bg-white rounded-2xl p-8 shadow" variants={item}>
                        <div className="flex items-center gap-3 mb-8">
                            <Sparkles />
                            <h3 className="text-2xl font-bold">Spa Services</h3>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            variants={container}
                        >
                            {services.spa.map((s, i) => (
                                <motion.div
                                    key={i}
                                    variants={item}
                                    whileHover={{ y: -6 }}
                                    className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                                >
                                    <img
                                        src={s.image}
                                        alt={s.name}
                                        className="h-40 w-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="p-4 text-center font-medium">{s.name}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* SALON */}
                    <motion.div className="bg-white rounded-2xl p-8 shadow" variants={item}>
                        <div className="flex items-center gap-3 mb-8">
                            <Scissors />
                            <h3 className="text-2xl font-bold">Salon Services</h3>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            variants={container}
                        >
                            {services.salon.map((s, i) => (
                                <motion.div
                                    key={i}
                                    variants={item}
                                    whileHover={{ y: -6 }}
                                    className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                                >
                                    <img
                                        src={s.image}
                                        alt={s.name}
                                        className="h-40 w-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="p-4 text-center font-medium">{s.name}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* PRODUCTS */}
                <motion.div
                    className="mt-24 bg-[#F3EDFF] rounded-3xl p-10 md:p-14"
                    variants={item}
                >
                    <div className="text-center mb-14">
                        <h3 className="text-3xl font-extrabold text-gray-900">
                            Top Products
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Professional products trusted by our experts
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8"
                        variants={container}
                    >
                        {products.map((p, i) => {
                            const Icon = productIcons[p.name];
                            return (
                                <motion.div
                                    key={i}
                                    variants={item}
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300"
                                >
                                    {p.badge && (
                                        <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                                            {p.badge}
                                        </span>
                                    )}

                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition">
                                        <Icon size={26} />
                                    </div>

                                    <p className="font-semibold text-gray-800 group-hover:text-primary transition">
                                        {p.name}
                                    </p>

                                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                        {p.desc}
                                    </p>

                                    <span className="inline-block mt-4 text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                                        {p.tag}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
