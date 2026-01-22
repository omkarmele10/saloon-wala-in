import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "/assets/logo/logo.jpeg";
import app from "/public/assets/app.png"
import play from "/public/assets/play.png"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonial" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px", // 👈 OFFSET FOR STICKY NAV
        threshold: 0.25,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    // 👇 Ensure Home is active at very top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass = (id) =>
    `transition ${activeSection === id
      ? "text-primary font-semibold"
      : "text-gray-700 hover:text-primary"
    }`;

  return (
    // <header className="sticky top-0 z-50 bg-white shadow-sm">
    //   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    //     {/* LOGO */}
    //     <a href="#home">
    //       <img src={logo} className="h-14" />
    //     </a>
    //     {/* DESKTOP MENU */}
    //     <nav className="hidden md:flex gap-8 font-medium">
    //       {sections.map((item) => (
    //         <a
    //           key={item.id}
    //           href={`#${item.id}`}
    //           className={linkClass(item.id)}
    //         >
    //           {item.label}
    //         </a>
    //       ))}
    //     </nav>

    //     {/* DESKTOP BUTTON */}
    //     <div className="hidden md:flex gap-4">
    //       <button className="bg-secondary hover:text-white cursor-pointer px-5 py-2 rounded-full">
    //         Download App
    //       </button>
    //     </div>

    //     {/* MOBILE ICON */}
    //     <button onClick={() => setOpen(!open)} className="md:hidden">
    //       {open ? <X size={28} /> : <Menu size={28} />}
    //     </button>
    //   </div>

    //   {/* MOBILE MENU */}
    //   {open && (
    //     <div className="md:hidden bg-white border-t shadow-lg">
    //       <nav className="flex flex-col gap-5 px-6 py-6 font-medium">
    //         {sections.map((item) => (
    //           <a
    //             key={item.id}
    //             href={`#${item.id}`}
    //             onClick={() => setOpen(false)}
    //             className={linkClass(item.id)}
    //           >
    //             {item.label}
    //           </a>
    //         ))}
    //       </nav>
    //     </div>
    //   )}
    // </header>
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home">
          <img src={logo} className="h-10" />
        </a>
        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 font-medium">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={linkClass(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-6">
          {/* DESKTOP DOWNLOAD BUTTON */}
          <a
            href="https://play.google.com/store/apps/details?id=com.google.android.youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex lg:w-30 text-white   font-medium hover:opacity-90 transition"
          >
            <img src={play} />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.google.android.youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex lg:w-30 text-white font-medium hover:opacity-90 transition"
          >
            <img src={app} />
          </a>
        </div>


        {/* MOBILE MENU ICON */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col gap-5 px-6 py-6 font-medium text-center">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={linkClass(item.id)}
              >
                {item.label}
              </a>
            ))}

            {/* MOBILE DOWNLOAD BUTTON */}
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center bg-secondary text-white py-3 rounded-full font-semibold"
            >
              Download App
            </a>
          </nav>
        </div>
      )}
    </header>

  );
}
