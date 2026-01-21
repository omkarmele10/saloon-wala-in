
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Send,
} from "lucide-react";

export default function ContactRideHub() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden "
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#1F5EFF] font-bold tracking-widest uppercase text-sm"
          >
            Get In Touch
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mt-2 mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Contact <span className="text-[#1F5EFF]">Ride</span>
            <span className="text-[#22C55E]">Hub</span>
          </motion.h2>

          <motion.p
            className="text-gray-500 max-w-xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Have questions about rides, drivers, or partnerships?
            Our support team is always ready to help you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* left info card */}
          <motion.div
            className="lg:col-span-5 bg-[#1F5EFF] text-white rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <div className="w-32 h-32 border-8 border-white rounded-full" />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">
                RideHub
              </h3>

              <p className="text-white/80 mb-12 text-lg leading-relaxed">
                RideHub connects riders and drivers with a fast, safe,
                and affordable ride-hailing experience across cities.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <Phone size={22} />,
                    label: "Call Us",
                    val: "+91 9XXXXXXXXX",
                  },
                  {
                    icon: <Mail size={22} />,
                    label: "Email Us",
                    val: "support@ridehub.com",
                  },
                  {
                    icon: <MapPin size={22} />,
                    label: "Visit Us",
                    val: "Bhopal, Madhya Pradesh, India",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-[#1F5EFF] transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase font-bold">
                        {item.label}
                      </p>
                      <p className="text-lg font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* socials */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm font-medium mb-5 opacity-70 uppercase tracking-widest">
                Follow Us
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5 }}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white hover:text-[#1F5EFF] transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* right form */}
          <motion.form
            className="lg:col-span-7 bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h4 className="text-2xl font-semibold mb-6">
              Send Us a Message
            </h4>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 --- --- ----"
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                I am interested in
              </label>
              <select
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none appearance-none"
                required
              >
                <option value="">Select an option</option>
                <option>Booking a Ride</option>
                <option>Driver Registration</option>
                <option>Business Partnership</option>
                <option>Customer Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#22C55E] text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-[#22C55E]/30 transition-all flex items-center justify-center gap-3"
            >
              Send Message
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
