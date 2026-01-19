import { Sparkles, Scissors, ShoppingBag } from "lucide-react";

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
    "Hair Serum",
    "Face Cleanser",
    "Massage Oils",
    "Hair Wax",
    "Skin Glow Cream",
];

const TopServicesAndProducts = () => {
    return (
        <section id="services" className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION TITLE */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                        Top Services & Products
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Most booked spa & salon services loved by our customers
                    </p>
                </div>

                {/* SERVICES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* SPA SERVICES */}
                    <div className="bg-white rounded-2xl p-8 shadow">
                        <div className="flex items-center gap-3 mb-8">
                            <Sparkles className="text-gray-800" />
                            <h3 className="text-2xl font-bold">Spa Services</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {services.spa.map((item, index) => (
                                <div
                                    key={index}
                                    className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-40 w-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="p-4 text-center font-medium">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SALON SERVICES */}
                    <div className="bg-white rounded-2xl p-8 shadow">
                        <div className="flex items-center gap-3 mb-8">
                            <Scissors className="text-gray-800" />
                            <h3 className="text-2xl font-bold">Salon Services</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {services.salon.map((item, index) => (
                                <div
                                    key={index}
                                    className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-40 w-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="p-4 text-center font-medium">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PRODUCTS */}
                <div className="mt-20 bg-white rounded-2xl p-10 shadow">
                    <div className="flex items-center gap-3 mb-8">
                        <ShoppingBag className="text-gray-800" />
                        <h3 className="text-2xl font-bold">Top Products</h3>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {products.map((product, index) => (
                            <span
                                key={index}
                                className="px-6 py-3 bg-gray-100 rounded-full font-medium hover:bg-gray-900 hover:text-white transition cursor-pointer"
                            >
                                {product}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TopServicesAndProducts;
