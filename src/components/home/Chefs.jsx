import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import { chefs } from "../../data/chefs";

const iconStyle = {
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  backgroundColor: "rgba(255,255,255,0.15)",
  border: "1px solid rgba(255,255,255,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "13px",
  textDecoration: "none",
  transition: "background 0.2s",
};

function Chefs() {
  return (
    <section className="sec-pad-lg" style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>

        <SectionTitle
          subtitle="Our Chefs"
          title="Meet Our Expert Chefs"
          description="Our talented chefs prepare every dish with passion and perfection."
        />

        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid #f3f4f6",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)";
                e.currentTarget.querySelector(".chef-socials").style.opacity = "1";
                e.currentTarget.querySelector(".chef-socials").style.transform = "translateY(0)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                e.currentTarget.querySelector(".chef-socials").style.opacity = "0";
                e.currentTarget.querySelector(".chef-socials").style.transform = "translateY(12px)";
              }}
            >
              {/* Chef Image */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="img-tall"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    transition: "transform 0.4s",
                  }}
                />
                {/* Overlay on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
                  }}
                />

                {/* Specialty tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    color: "#ea580c",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {index === 0 ? "Head Chef" : "Specialist"}
                </div>

                {/* Social icons — reveal on hover */}
                <div
                  className="chef-socials"
                  style={{
                    position: "absolute",
                    bottom: "18px",
                    left: "18px",
                    display: "flex",
                    gap: "10px",
                    opacity: 0,
                    transform: "translateY(12px)",
                    transition: "opacity 0.3s, transform 0.3s",
                  }}
                >
                  <Link
                    to="/notfound"
                    style={iconStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ea580c")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)")}
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to="/notfound"
                    style={iconStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ea580c")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)")}
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to="/notfound"
                    style={iconStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ea580c")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)")}
                  >
                    <FaXTwitter />
                  </Link>
                </div>
              </div>

              {/* Chef Info */}
              <div style={{ padding: "24px", textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#111827",
                    margin: "0 0 6px 0",
                  }}
                >
                  {chef.name}
                </h3>
                <p
                  style={{
                    color: "#ea580c",
                    fontWeight: 600,
                    fontSize: "14px",
                    margin: 0,
                  }}
                >
                  {chef.role}
                </p>

                {/* Divider */}
                <div
                  style={{
                    width: "40px",
                    height: "3px",
                    backgroundColor: "#ea580c",
                    borderRadius: "999px",
                    margin: "14px auto 0 auto",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Chefs;