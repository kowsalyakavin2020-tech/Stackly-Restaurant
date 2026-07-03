import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaStar, FaChevronDown } from "react-icons/fa6";
import heroBg from "../../assets/images/hero/hero-1.webp";
import heroFood from "../../assets/images/hero/hero-2.webp";

// Lightweight count-up hook — animates a number from 0 to target once in view
function useCountUp(target, isInView, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    let raf;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return value;
}

function StatCard({ number, suffix, label, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(number, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      style={{
        position: "relative",
        backgroundColor: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "24px",
        padding: "32px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234,88,12,0.35), transparent 70%)",
        }}
      />
      <h3 style={{ position: "relative", fontSize: "3rem", fontWeight: 700, color: "#f97316", margin: 0 }}>
        {count}
        {suffix}
      </h3>
      <p style={{ position: "relative", marginTop: "8px", color: "#e5e7eb", fontSize: "15px" }}>
        {label}
      </p>
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(115deg, rgba(0,0,0,0.82) 15%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      {/* Decorative floating orbs — hidden on small screens */}
      <motion.div
        className="decor-hide-mobile"
        animate={{ y: [0, 24, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "12%",
          left: "6%",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234,88,12,0.28), transparent 70%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        className="decor-hide-mobile"
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute",
          bottom: "8%",
          right: "10%",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.22), transparent 70%)",
          filter: "blur(12px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 48px 80px 48px",
          width: "100%",
        }}
      >
        {/* Top Grid */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#ea580c",
                color: "white",
                padding: "8px 20px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 600,
                boxShadow: "0 8px 20px rgba(234,88,12,0.35)",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "inline-block",
                  animation: "pulseDot 1.6s infinite",
                }}
              />
              Welcome To Stackly Restaurant
            </motion.span>

            <h1
              style={{
                marginTop: "24px",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "white",
              }}
            >
              Experience
              <br />
              <span style={{ color: "#f97316" }}>World-Class</span>
              <br />
              Dining
            </h1>

            <p
              style={{
                marginTop: "20px",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#d1d5db",
                maxWidth: "520px",
              }}
            >
              Discover handcrafted dishes prepared with fresh ingredients,
              authentic recipes and unforgettable dining experiences created
              by our expert chefs.
            </p>

            <div
              className="hero-actions"
              style={{
                marginTop: "32px",
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <Link
                to="/menu"
                style={{
                  backgroundColor: "#ea580c",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: "0 10px 25px rgba(234,88,12,0.4)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 14px 30px rgba(234,88,12,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(234,88,12,0.4)";
                }}
              >
                Explore Menu
              </Link>

              <Link
                to="/reservation"
                style={{
                  border: "2px solid white",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#111827";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "white";
                }}
              >
                Book Table
              </Link>
            </div>

            {/* Trust row */}
            <div
              className="hero-trust-row"
              style={{ marginTop: "36px", display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}
            >
              <div style={{ display: "flex", color: "#f59e0b" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={15} />
                ))}
              </div>
              <span style={{ color: "#d1d5db", fontSize: "14px" }}>
                <strong style={{ color: "white" }}>4.9/5</strong> from 500+ happy diners
              </span>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="hero-image-wrap"
            style={{ display: "flex", justifyContent: "flex-end", position: "relative" }}
          >
            <div style={{ position: "relative", maxWidth: "460px", width: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-16px",
                  borderRadius: "24px",
                  backgroundColor: "rgba(234,88,12,0.2)",
                  filter: "blur(32px)",
                }}
              />
              <img
                src={heroFood}
                alt="Stackly Restaurant"
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "460px",
                  height: "auto",
                  borderRadius: "24px",
                  objectFit: "cover",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "block",
                }}
              />

              {/* Floating rating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="badge-float"
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  left: "-24px",
                  backgroundColor: "white",
                  borderRadius: "18px",
                  padding: "14px 18px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  maxWidth: "calc(100% - 24px)",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "#fff7ed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ea580c",
                    flexShrink: 0,
                  }}
                >
                  <FaStar size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "16px", color: "#111827" }}>4.9 Rated</div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>Excellent Service</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div
          className="hero-stats"
          style={{
            marginTop: "64px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          <StatCard number={15} suffix="K+" label="Happy Customers" delay={0} />
          <StatCard number={50} suffix="+" label="Expert Chefs" delay={0.15} />
          <StatCard number={20} suffix="+" label="Years Experience" delay={0.3} />
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "48px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <FaChevronDown size={18} />
        </motion.div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

export default Hero;