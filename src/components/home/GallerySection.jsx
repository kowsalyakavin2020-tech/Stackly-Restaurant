import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExpand } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import { galleryImages } from "../../data/gallery";

function GallerySection() {
  return (
    <section className="sec-pad-lg" style={{ padding: "80px 0", backgroundColor: "#f9fafb" }}>
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>

        <SectionTitle
          subtitle="Gallery"
          title="A Glimpse Of Our Restaurant"
          description="Explore our delicious dishes, beautiful interiors and memorable dining moments."
        />

        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "220px",
            gap: "16px",
          }}
        >
          {galleryImages.map((item, index) => {
            // First tile spans two columns and two rows for a mosaic feel
            const isFeatured = index === 0;
            return (
              <motion.div
                key={index}
                className={isFeatured ? "gallery-featured" : ""}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                style={{
                  gridColumn: isFeatured ? "span 2" : "span 1",
                  gridRow: isFeatured ? "span 2" : "span 1",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  position: "relative",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("img").style.transform = "scale(1.08)";
                  e.currentTarget.querySelector(".gallery-overlay").style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("img").style.transform = "scale(1)";
                  e.currentTarget.querySelector(".gallery-overlay").style.opacity = "0";
                }}
              >
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s",
                  }}
                />
                {/* Hover overlay with expand icon */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(15,23,42,0.55)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <FaExpand size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View Full Gallery Button */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            to="/gallery"
            style={{
              display: "inline-block",
              border: "2px solid #ea580c",
              color: "#ea580c",
              padding: "13px 40px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ea580c";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#ea580c";
            }}
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}

export default GallerySection;