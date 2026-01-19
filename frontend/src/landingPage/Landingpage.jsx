import AboutSection from "./component/AboutSection"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Testimonial from "./component/Testimonial"
import ContactComponent from "./component/ContactComponent"
import SpaSalonGallery from "./component/SpaSalonGallery"
import Hero from "./component/Hero"
import TopServicesAndProducts from "./component/TopServicesAndProducts"
import MissionVision from "./component/MissionVision"

AboutSection
const Landingpage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutSection />
            <MissionVision />
            <SpaSalonGallery />
            <TopServicesAndProducts />
            <Testimonial />
            <ContactComponent />
            <Footer />
        </div>
    )
}
export default Landingpage