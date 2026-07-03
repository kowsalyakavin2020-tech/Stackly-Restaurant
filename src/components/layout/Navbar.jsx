import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/navigation";
import logo from "../../assets/logo/stackly-logo-cropped.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          backgroundColor: "white",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
          backdropFilter: "blur(12px)",
          transition: "box-shadow 0.3s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 24px", gap: "16px" }}>

          {/* LOGO */}
          <Link to="/" onClick={handleLogoClick} style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Stackly" style={{ height: "40px", width: "auto", display: "block", objectFit: "contain" }} />
          </Link>

          {/* NAV LINKS - desktop */}
          <ul style={{ display: "none", alignItems: "center", gap: "20px", listStyle: "none", margin: 0, padding: 0, flex: 1, justifyContent: "center" }} className="lg-nav">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  style={({ isActive }) => ({
                    fontSize: "14px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    color: isActive ? "#ea580c" : "#374151",
                    transition: "color 0.2s",
                  })}
                  onMouseEnter={e => e.target.style.color = "#ea580c"}
                  onMouseLeave={(e) => {
                    if (!e.target.classList.contains("active")) {
                      e.target.style.color = "#374151";
                    }
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* BOOK TABLE - desktop */}
          <Link
            to="/reservation"
            style={{ flexShrink: 0, whiteSpace: "nowrap", backgroundColor: "#ea580c", color: "white", padding: "8px 20px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "none" }}
            className="book-btn"
          >
            Book Table
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", fontSize: "26px", color: "#374151", padding: "4px" }}
            className="mobile-menu-btn"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 55 }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "280px",
                height: "100vh",
                backgroundColor: "#ffffff",
                zIndex: 60,
                display: "flex",
                flexDirection: "column",
                boxShadow: "-4px 0 24px rgba(0,0,0,0.15)",
              }}
            >
              {/* Drawer Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: "1px solid #f3f4f6" }}>
                <img src={logo} alt="Stackly" style={{ height: "32px", width: "auto", objectFit: "contain" }} />
                <button
                  onClick={() => setIsOpen(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#374151", display: "flex", alignItems: "center" }}
                >
                  <HiX />
                </button>
              </div>

              {/* Drawer Links */}
              <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
                {navLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    style={({ isActive }) => ({
                      padding: "16px 24px",
                      borderBottom: "1px solid #f9fafb",
                      fontSize: "15px",
                      fontWeight: 500,
                      textDecoration: "none",
                      color: isActive ? "#ea580c" : "#374151",
                      backgroundColor: isActive ? "#fff7ed" : "transparent",
                      transition: "all 0.2s",
                    })}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Drawer Footer - Book Table Button */}
              <div style={{ padding: "20px 24px", borderTop: "1px solid #f3f4f6" }}>
                <Link
                  to="/reservation"
                  onClick={() => setIsOpen(false)}
                  style={{ display: "block", backgroundColor: "#ea580c", color: "white", textAlign: "center", padding: "14px", borderRadius: "999px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}
                >
                  Book Table
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .lg-nav { display: flex !important; }
          .book-btn { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;