import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import defaultBg from "../../assets/images/hero/hero-1.webp";

// Reused across About / Menu / Contact / Gallery / Blog / Reservation / FAQ
// so every inner page opens with the same visual language, but each page
// passes its own bgImage so the banners aren't all identical.
function PageBanner({ title, crumb, bgImage }) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${bgImage || defaultBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.72)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "140px 48px 90px 48px",
          textAlign: "center",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#ea580c",
            color: "white",
            padding: "8px 20px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Stackly Restaurant
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            marginTop: "22px",
            fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
          }}
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            marginTop: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            color: "#d1d5db",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          <Link to="/" style={{ color: "#d1d5db", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ color: "#ea580c" }}>/</span>
          <span style={{ color: "#f97316" }}>{crumb}</span>
        </motion.div>
      </div>
    </section>
  );
}

export default PageBanner;