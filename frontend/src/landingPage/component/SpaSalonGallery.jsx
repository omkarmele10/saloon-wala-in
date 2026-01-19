import { motion } from "framer-motion";

export default function SpaSalonGallery() {
  const images = [
    "https://images.unsplash.com/photo-1559599101-f09722fb4948",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3",
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
  ];

  return (
    <section className="py-28 px-6 bg-linear-to-b from-purple-50 to-white">
      {/* Heading */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Spa & Salon Gallery
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Explore premium spa, salon, beauty & wellness experiences from our
        trusted multivendor partners
      </motion.p>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="mb-6 relative overflow-hidden rounded-3xl group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Image */}
            <img
              src={img}
              alt="Spa & Salon Service"
              className="w-full rounded-3xl transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
              <div className="p-6">
                <h3 className="text-white   font-semibold">
                  Premium Beauty Experience
                </h3>
                <p className="text-purple-200 text-sm">
                  Spa • Salon • Wellness
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
