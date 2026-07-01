import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Events from "../components/Events/Events";
import Journey from "../components/Journey/Journey";
import About from "../components/About/About";
import Categories from "../components/Categories/Categories";
import Disciplines from "../components/Disciplines/Disciplines";
import Register from "../components/Register/Register";
import Join from "../components/Join/Join";
import Sponsors from "../components/Sponsors/Sponsors";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="bg-[#1A1919] min-h-screen">
      <Navbar />
      <Hero />
      <Events />
      <Journey />
      <About />
      <Categories />
      <Disciplines />
      <Register />
      <Join />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;