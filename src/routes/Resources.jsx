import Navbar from "../components/Navbar";
import Blog from "./Blog";
import Accordion from "./Accordion";
import "../components/NavbarStyles.css";
import Footer from "../components/Footer";
function Resources() {
    return (
        <>
        <Navbar/>
        <Blog/>
        <Accordion/>
        <Footer></Footer>
        </>
    )
}
export default Resources;