import Footer from "./components/Footer";
import AddOns from "./pages/AddOns";
import Amenities from "./pages/Amenities";
import ForestStayFeatures from "./pages/ForestStayFeatures";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Services from "./pages/Servies";

function App() {
  return (
    <>
      <Home />
      <Packages />
      <Amenities/>
      <ForestStayFeatures/>
      <AddOns/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;