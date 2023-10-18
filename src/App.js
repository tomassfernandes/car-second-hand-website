import Header from "./Sections/Header";
import SectionAbout from "./Sections/SectionAbout";
import Testimonials from "./Sections/Testimonials";
import VehicleModels from "./Sections/VehicleModels";
import PhoneApp from "./Sections/PhoneApp";
import Footer from "./Sections/Footer";
import FAQ from "./Sections/FAQ";

function App() {
  return (
    <>
      <Header />
      <SectionAbout />
      <VehicleModels />
      <Testimonials />
      <FAQ />
      <PhoneApp />
      <Footer />
    </>
  );
}

export default App;
