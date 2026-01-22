import AboutSection from "./component/AboutSection"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Testimonial from "./component/Testimonial"
import ContactComponent from "./component/ContactComponent"
import SpaSalonGallery from "./component/SpaSalonGallery"
import Hero from "./component/Hero"
import TopServicesAndProducts from "./component/TopServicesAndProducts"
import MissionVision from "./component/MissionVision"
import TestimonialsRidehub from "./component/TestimonialsRidehub"
import ContactRidehub from "./component/ContactRidehub"

import Download from "./component/Download"
import AppScreensCarousel from "./component/AppScreensCarousel"

import DownloadAppQR from "./component/DownloadAppQR"
AboutSection
const Landingpage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <DownloadAppQR />
            <AboutSection />
            <AppScreensCarousel />
            <MissionVision />
            <SpaSalonGallery />
            <TopServicesAndProducts />
            <Testimonial />
            <ContactComponent />

            {/* <ContactRidehub /><TestimonialsRidehub /> */}
            <Download />
            <Footer />
        </div>
    )
}
export default Landingpage