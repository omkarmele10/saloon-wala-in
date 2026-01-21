import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    {
      value: "1000+",
      label: "Happy Customers",
    },
    {
      value: "200+",
      label: "Verified Salons & Spas",
    },
    {
      value: "50+",
      label: "Cities Covered",
    },
    {
      value: "24/7",
      label: "Online Booking",
    },
  ];

  return (
<<<<<<< HEAD
    <section id="about" className="py-16  bg-bgColor">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
=======
    <section id="about" className="py-28  bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl  mx-auto  px-4 grid md:grid-cols-2 gap-16 items-center">
>>>>>>> 7aaaa0e1316fb10f8d4b98daf08a0b7bb1d35e29
        {/* IMAGE */}
        <motion.img
          src="https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=870&auto=format&fit=crop"
          alt="Spa & Salon Services"
          className="rounded-[40px] shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            About Our Platform
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Our platform connects customers
            with trusted beauty, wellness, and grooming professionals under one
            roof.
          </p>

          <p className="text-gray-700 mb-10 leading-relaxed">
            From hair styling and makeup to spa therapies and wellness care, we
            make it easy to discover services, compare vendors, and book
            appointments instantly with confidence.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <h3 className="text-2xl font-bold text-primary">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

