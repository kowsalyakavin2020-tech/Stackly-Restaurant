import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import PopularDishes from "../components/home/PopularDishes";
import Chefs from "../components/home/Chefs";
import GallerySection from "../components/home/GallerySection";
import Testimonials from "../components/home/Testimonials";
import ReservationCTA from "../components/home/ReservationCTA";
import BlogPreview from "../components/home/BlogPreview";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HomeAbout />
        <PopularDishes />
        <Chefs />
        <GallerySection />
        <Testimonials />
        <ReservationCTA />
        <BlogPreview />
      </main>

      <Footer />
    </>
  );
}

export default Home;