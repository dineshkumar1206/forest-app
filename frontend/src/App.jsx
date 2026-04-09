import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import AddOns from "./pages/AddOns";
import Amenities from "./pages/Amenities";
import ForestStayFeatures from "./pages/ForestStayFeatures";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Testimonials from "./pages/Testimonials";
// import Services from "./pages/Servies";

function App() {
  return (
    <>
      <FloatingContact/>
      <Home />
      <Amenities/>
      <Packages />
      <ForestStayFeatures/>
      <AddOns/>
      {/* <Services/> */}
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;