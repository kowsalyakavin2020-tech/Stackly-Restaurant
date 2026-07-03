import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo/stackly-logo-cropped.webp";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const socialStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#1e293b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  color: "white",
  textDecoration: "none",
  transition: "background 0.2s",
};

const hoverOn = (e) => (e.currentTarget.style.backgroundColor = "#ea580c");
const hoverOff = (e) => (e.currentTarget.style.backgroundColor = "#1e293b");
const linkStyle = { color: "#94a3b8", textDecoration: "none", fontSize: "14px" };
const linkHoverOn = (e) => (e.target.style.color = "#f97316");
const linkHoverOff = (e) => (e.target.style.color = "#94a3b8");

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToHero = () => {
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToHero();
    } else {
      navigate("/");
      setTimeout(scrollToHero, 300);
    }
  };

  return (
    <footer style={{ backgroundColor: "#0f172a", color: "white" }}>

      <div
        className="footer-grid container"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 48px 40px 48px",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: "40px",
        }}
      >
        {/* Brand */}
        <div>
          <Link to="/" onClick={handleHomeClick} style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", justifyContent: "inherit" }}>
            <img src={logo} alt="Stackly" style={{ height: "44px", width: "auto" }} />
          </Link>

          <p style={{ color: "#94a3b8", marginTop: "20px", lineHeight: 1.8, fontSize: "14px" }}>
            Experience delicious food crafted with passion, fresh ingredients
            and unforgettable taste. Your perfect dining destination.
          </p>

          {/* Social Icons */}
          <div className="footer-social" style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            <Link to="/notfound" style={socialStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              <FaFacebookF />
            </Link>
            <Link to="/notfound" style={socialStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              <FaInstagram />
            </Link>
            <Link to="/notfound" style={socialStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              <FaXTwitter />
            </Link>
            <Link to="/notfound" style={socialStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", color: "white" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/" onClick={handleHomeClick} style={linkStyle} onMouseEnter={linkHoverOn} onMouseLeave={linkHoverOff}>Home</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/about" style={linkStyle} onMouseEnter={linkHoverOn} onMouseLeave={linkHoverOff}>About</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/menu" style={linkStyle} onMouseEnter={linkHoverOn} onMouseLeave={linkHoverOff}>Menu</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/gallery" style={linkStyle} onMouseEnter={linkHoverOn} onMouseLeave={linkHoverOff}>Gallery</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/reservation" style={linkStyle} onMouseEnter={linkHoverOn} onMouseLeave={linkHoverOff}>Reservation</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/blog" style={linkStyle} onMouseEnter={linkHoverOn} onMouseLeave={linkHoverOff}>Blog</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/contact" style={linkStyle} onMouseEnter={linkHoverOn} onMouseLeave={linkHoverOff}>Contact</Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/faq" style={linkStyle} onMouseEnter={linkHoverOn} onMouseLeave={linkHoverOff}>FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", color: "white" }}>
            Contact
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.7, marginBottom: "12px" }}>
            MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil, Salem, Tamil Nadu 636008
          </p>
          <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "12px" }}>
            +91 98765 43210
          </p>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>
            info@stacklyrestaurant.com
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px", color: "white" }}>
            Opening Hours
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "4px" }}>Monday - Friday</p>
          <p style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "16px" }}>
            10:00 AM - 10:00 PM
          </p>
          <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "4px" }}>Saturday - Sunday</p>
          <p style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "16px" }}>
            09:00 AM - 11:00 PM
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#14532d",
              color: "#4ade80",
              padding: "4px 12px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4ade80", display: "inline-block" }} />
            Open Now
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="footer-bottom container"
        style={{
          borderTop: "1px solid #1e293b",
          padding: "20px 48px",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>
          &copy; {new Date().getFullYear()} Stackly Restaurant. All Rights Reserved.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/notfound" style={{ color: "#64748b", fontSize: "13px", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.color = "#f97316")}
            onMouseLeave={(e) => (e.target.style.color = "#64748b")}
          >
            Privacy Policy
          </Link>
          <Link to="/notfound" style={{ color: "#64748b", fontSize: "13px", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.color = "#f97316")}
            onMouseLeave={(e) => (e.target.style.color = "#64748b")}
          >
            Terms of Service
          </Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;