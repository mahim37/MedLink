import Navbar from "../components/Navbar";
import Carousel from "./Carousel";
import Team from "./Team";
import "../components/NavbarStyles.css";
import Footer from "../components/Footer";
function Company() {
    return (
        <>
        <Navbar/>
        <Carousel/>
        <Team/>
        <Footer></Footer>
        </>
    )
}
export default Company;