import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Facebook,
    Youtube,
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
        <section
            id="contact"
            className="py-28 px-6 bg-secondary/10"
        >
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2
                    className="text-2xl md:text-4xl font-bold mb-4 text-[--color-dark]"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    Contact Us
                </motion.h2>

                <motion.p
                    className="text-gray-600 "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Have questions about bookings, services, or becoming a vendor?
                    We’re here to help you anytime.
                </motion.p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
                {/* LEFT – CONTACT DETAILS */}
                <motion.div
                    className="bg-primary text-white rounded-3xl p-10 flex flex-col justify-between shadow-lg"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            SALOON WALA
                        </h3>

                        <p className="text-white/80 mb-10 leading-relaxed">
                            Discover, book, and manage beauty, salon, and wellness services
                            from trusted professionals across multiple vendors.
                        </p>

                        <div className="space-y-6 text-sm">
                            <div className="flex items-center gap-4">
                                <Phone size={18} />
                                <span>+91 9XXXXXXXXX</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail size={18} />
                                <span>support@saloonwala.com</span>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin size={18} className="mt-1" />
                                <span>
                                    Head Office,
                                    <br />
                                    Bhopal,Madhya Pradesh , India
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="mt-12">
                        <p className="text-white/70 text-sm mb-4 uppercase tracking-wide">
                            Follow Us
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-primary transition"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>

                            <a
                                href="#"
                                className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-primary transition"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>

                            <a
                                href="#"
                                className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-primary transition"
                                aria-label="YouTube"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT – FORM */}
                <motion.form
                    ref={formRef}
                    className="bg-white rounded-3xl shadow-xl p-10"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h4 className="text-2xl font-semibold mb-8 text-[--color-dark]">
                        Send Us a Message
                    </h4>

                    <div className="grid gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                name="user_name"
                                placeholder="Enter your full name"
                                type="text"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Phone Number
                            </label>
                            <input
                                name="user_phone"
                                placeholder="Enter your phone number"
                                type="tel"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                I am interested in
                            </label>
                            <select
                                name="interest"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                                required
                            >
                                <option value="">Select Option</option>
                                <option value="Booking a Service">Booking a Service</option>
                                <option value="Spa & Salon Services">Spa & Salon Services</option>
                                <option value="Vendor Registration">Vendor Registration</option>
                                <option value="Partnership">Partnership</option>
                                <option value="Support">Support</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                placeholder="Write your message here..."
                                name="message"
                                rows="4"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-secondary hover:bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
