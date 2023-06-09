import Navbar from "../components/Navbar";
import MarketplacesCards from "./MarketplacesCards";
import "../components/NavbarStyles.css";
import Footer from "../components/Footer";
function Marketplaces() {
  return (
    <div>
      <Navbar/>
      <MarketplacesCards/>
      <Footer/>
    </div>
  );
}
export default Marketplaces;
