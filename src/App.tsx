import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Dining from "./components/Dining";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] font-body text-[#1C1B19] antialiased">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Rooms />
        <Amenities />
        <Dining />
        <Gallery />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
