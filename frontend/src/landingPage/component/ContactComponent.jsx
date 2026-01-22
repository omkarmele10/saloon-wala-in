
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import logo from "/assets/logo/logo.jpeg";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Facebook,
    Youtube,
    Send,
} from "lucide-react";

export default function Contact() {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_vql9kv9",
                "template_4ugj04b",
                formRef.current,
                "--P_Ll_JY6WnYW61j"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    formRef.current.reset();
                },
                (error) => {
                    console.error(error);
                    alert("Failed to send message. Try again.");
                }
            );
    };

    return (
        <section id="contact" className="relative py-14 px-6 overflow-hidden bg-white">
            {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
            {/* <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" /> */}
            {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" /> */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* HEADING SECTION */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h2
                        className=" mt-2 mb-4 text-3xl md:text-4xl  font-black text-slate-900 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-primary"> Let’s Start </span>a Conversation
                    </motion.h2>
                    <motion.p
                        className="text-gray-500 max-w-xl mx-auto text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        Have questions? We’re here to help you find the perfect beauty and wellness experience.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: INFO CARD */}
                    <motion.div
                        className="lg:col-span-5 bg-primary text-white rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        {/* Inner decoration */}
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <div className="w-32 h-32 border-8 border-white rounded-full" />
                        </div>

                        <div>
                            <a href="#home">
                                <img
                                    src={logo}
                                    alt="Spa & Salon Logo"
                                    className="w-20 mb-4 rounded-md p-2 shadow bg-white "
                                />
                            </a>
                            <p className="text-white/80 mb-12 text-lg leading-relaxed">
                                Seamlessly connecting you with premium salon services. Your beauty journey starts here.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: <Phone size={22} />, label: "Call Us", val: "+91 9XXXXXXXXX" },
                                    { icon: <Mail size={22} />, label: "Email Us", val: "support@saloonwala.com" },
                                    { icon: <MapPin size={22} />, label: "Visit Us", val: "Bhopal, Madhya Pradesh, India" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-5 group">
                                        <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/50 uppercase font-bold">{item.label}</p>
                                            <p className="text-lg font-medium">{item.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SOCIALS */}
                        <div className="mt-16 pt-8 border-t border-white/10">
                            <p className="text-sm font-medium mb-5 opacity-70 uppercase tracking-widest">Follow our journey</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Instagram size={20} />, link: "#" },
                                    { icon: <Facebook size={20} />, link: "#" },
                                    { icon: <Youtube size={20} />, link: "#" }
                                ].map((soc, i) => (
                                    <motion.a
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        href={soc.link}
                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white hover:text-primary transition-colors"
                                    >
                                        {soc.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: CONTACT FORM */}
                    <motion.div
                        className="lg:col-span-7 bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                <input
                                    name="user_name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                <input
                                    name="user_phone"
                                    type="tel"
                                    placeholder="+91 --- --- ----"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">I am interested in</label>
                                <select
                                    name="interest"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="Booking a Service">Booking a Service</option>
                                    <option value="Spa & Salon Services">Spa & Salon Services</option>
                                    <option value="Vendor Registration">Vendor Registration</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Support">Support</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="How can we help you today?"
                                    rows="4"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-secondary text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-secondary/30 hover:bg-primary transition-all flex items-center justify-center gap-3"
                            >
                                Send Message
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}