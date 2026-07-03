import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #fff7ed 100%)", padding: "80px 20px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "300px", height: "300px", backgroundColor: "rgba(234,88,12,0.05)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "240px", height: "240px", backgroundColor: "rgba(234,88,12,0.05)", borderRadius: "50%" }} />

      <div style={{ textAlign: "center", maxWidth: "560px", width: "100%", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}>
          <div style={{ fontSize: "clamp(80px, 20vw, 140px)", fontWeight: 900, color: "#ea580c", lineHeight: 1 }}>404</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} style={{ fontSize: "44px", marginTop: "12px", marginBottom: "12px" }}>🍽️</motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
          style={{ fontSize: "clamp(20px, 4vw, 32px)", fontWeight: 800, color: "#111827", margin: "0 0 14px 0" }}>
          Oops! This Page Isn't On The Menu
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
          style={{ fontSize: "15px", color: "#6b7280", lineHeight: 1.8, marginBottom: "36px" }}>
          Looks like this page has gone out of the kitchen. Our homepage has everything you need.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "160px", height: "50px", borderRadius: "999px", backgroundColor: "#ea580c", color: "white", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>
              🏠 Go To Home
            </Link>
            <button onClick={() => navigate(-1)} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "160px", height: "50px", borderRadius: "999px", border: "2px solid #ea580c", backgroundColor: "white", color: "#ea580c", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
              ← Go Back
            </button>
          </div>
          <p style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "12px" }}>Or visit one of these pages:</p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ label: "Menu", path: "/menu" }, { label: "Gallery", path: "/gallery" }, { label: "Contact", path: "/contact" }, { label: "Reservation", path: "/reservation" }].map(item => (
              <Link key={item.label} to={item.path} style={{ padding: "8px 16px", backgroundColor: "#fff7ed", color: "#ea580c", borderRadius: "999px", fontSize: "13px", fontWeight: 600, textDecoration: "none", border: "1px solid #fed7aa" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NotFound;