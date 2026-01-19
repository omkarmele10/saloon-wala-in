import Navbar from "./landingPage/component/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './landingPage/component/Footer'
import Landingpage from "./landingPage/Landingpage";
import ScrollToTop from './landingPage/component/ScrollToTop';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </Router>
    </>
  )
}
export default App