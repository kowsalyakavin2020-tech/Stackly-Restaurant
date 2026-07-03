import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import { galleryImages } from "../data/gallery";
import galleryBanner from "../assets/images/banners/gallery-banner.webp";

const CATEGORIES = ["All", "Food", "Interior", "Events"];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const taggedImages = useMemo(() =>
    galleryImages.map((item, index) => ({
      image: item.src,
      id: index,
      category: item.category,
    })), []);

  const filteredImages = activeCategory === "All" ? taggedImages : taggedImages.filter(img => img.category === activeCategory);

  return (
    <>
      <style>{`
        .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .gallery-container { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .gallery-sec { padding: 80px 0; }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .gallery-container { padding: 0 20px; }
          .gallery-sec { padding: 48px 0; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />
      <main>
        <PageBanner title="A Look Inside Our Restaurant" crumb="Gallery" bgImage={galleryBanner} />

        <section className="gallery-sec" style={{ backgroundColor: "#fff" }}>
          <div className="gallery-container">
            <SectionTitle subtitle="Gallery" title="Moments Worth Savoring" description="Dishes, spaces and celebrations — a glimpse into life at Stackly." />

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{ padding: "9px 22px", borderRadius: "999px", border: activeCategory === cat ? "2px solid #ea580c" : "2px solid #e5e7eb", backgroundColor: activeCategory === cat ? "#ea580c" : "white", color: activeCategory === cat ? "white" : "#374151", fontWeight: 600, fontSize: "14px", cursor: "pointer", transition: "all 0.2s" }}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="gallery-grid">
              {filteredImages.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.04 }} viewport={{ once: true }}
                  onClick={() => setLightbox(item.image)}
                  style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", position: "relative", cursor: "pointer" }}>
                  <img src={item.image} alt={`Gallery ${item.id + 1}`}
                    style={{ width: "100%", height: "200px", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.08)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                  <div style={{ position: "absolute", bottom: "8px", left: "8px", backgroundColor: "rgba(17,24,39,0.85)", color: "white", padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600 }}>
                    {item.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {lightbox && (
          <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.92)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "20px" }}>
            <img src={lightbox} alt="Full view" style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: "16px", objectFit: "contain" }} />
            <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255,255,255,0.15)", border: "none", color: "white", width: "44px", height: "44px", borderRadius: "50%", fontSize: "20px", cursor: "pointer" }}>✕</button>
          </div>
        )}

        <section style={{ padding: "70px 0", backgroundColor: "#111827" }}>
          <div className="gallery-container" style={{ textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <span style={{ display: "inline-block", backgroundColor: "#ea580c", color: "white", padding: "8px 20px", borderRadius: "999px", fontWeight: 600, fontSize: "14px", marginBottom: "18px" }}>Follow Along</span>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "white", marginBottom: "14px" }}>More On Our Instagram</h2>
              <p style={{ color: "#d1d5db", fontSize: "15px", marginBottom: "28px" }}>Behind-the-scenes moments, new dishes and events — @stacklyrestaurant</p>
              <a href="/notfound" style={{ display: "inline-block", backgroundColor: "#ea580c", color: "white", padding: "13px 32px", borderRadius: "999px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
                Follow @stacklyrestaurant
              </a>
            </motion.div>
          </div>
        </section>

        <section style={{ padding: "70px 0", backgroundColor: "#fff7ed" }}>
          <div className="gallery-container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#111827" }}>Ready To Create Your Own Moment?</h2>
            <p style={{ marginTop: "14px", color: "#6b7280", fontSize: "15px" }}>Book a table and be part of our next story.</p>
            <Link to="/reservation" style={{ display: "inline-block", marginTop: "28px", backgroundColor: "#ea580c", color: "white", padding: "14px 36px", borderRadius: "999px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
              Book A Table
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;