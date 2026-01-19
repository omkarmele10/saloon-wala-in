import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Scissors,
  Sparkles,
  Store,
} from "lucide-react";
import logo from "/assets/logo/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid md:grid-cols-4 gap-12">

        {/* BRAND INFO */}
        <div>
          <a href="#home">
            <img
              src={logo}
              alt="Spa & Salon Logo"
              className="w-20 mb-4 rounded-xl p-2 shadow bg-white "
            />
          </a>

          <p className="text-sm text-white/80 leading-relaxed">
            A complete spa & salon multivendor platform where you can discover,
            book, and manage beauty, wellness, and grooming services from
            trusted professionals near you.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-white/80">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#vendors" className="hover:text-white">Vendors</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-center gap-2">
              <Scissors size={16} /> Hair & Styling
            </li>
            <li className="flex items-center gap-2">
              <Sparkles size={16} /> Beauty & Makeup
            </li>
            <li className="flex items-center gap-2">
              <Sparkles size={16} /> Spa & Wellness
            </li>
            <li className="flex items-center gap-2">
              <Sparkles size={16} /> Skin & Body Care
            </li>
            <li className="flex items-center gap-2">
              <Store size={16} /> Multivendor Salons
            </li>
          </ul>
        </div>

        {/* CONTACT & SOCIAL */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-white/80 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} /> +91 9XXXXXXXXX
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} /> support@spasalon.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              Head Office – Bhopal
            </li>
          </ul>

          {/* SOCIAL MEDIA */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              aria-label="Instagram"
              className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-white/20 text-center py-6 text-sm text-white/70">
        <p className="text-white/70 text-sm">
          © 2026 All-in-One Spa & Salon Platform. Developed & Managed by{" "}
          <a
            className="text-secondary font-semibold underline ml-1"
            href="https://binarylogix.in/"
            target="_blank"
            rel="noreferrer"
          >
            Binarylogix Technologies LLP
          </a>
        </p>
      </div>
    </footer>
  );
}
