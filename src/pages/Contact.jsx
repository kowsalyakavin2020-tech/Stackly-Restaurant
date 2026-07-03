import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";
import contactBg from "../assets/images/banners/contact-banner.webp";

const contactInfo = [
  { icon: "📍", title: "Our Location", text: "MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil, Salem, Tamil Nadu 636008" },
  { icon: "📞", title: "Phone Number", text: "+91 98765 43210" },
  { icon: "✉️", title: "Email Address", text: "hello@stacklyrestaurant.com" },
  { icon: "🕐", title: "Opening Hours", text: "Mon – Sun: 9:00 AM – 11:00 PM" },
];

const socials = [
  { icon: "📘", name: "Facebook", handle: "@stacklyrestaurant" },
  { icon: "📸", name: "Instagram", handle: "@stacklyrestaurant" },
  { icon: "🐦", name: "Twitter", handle: "@stacklyrest" },
  { icon: "▶️", name: "YouTube", handle: "Stackly Restaurant" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <style>{`
        .contact-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .contact-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .contact-socials { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .contact-container { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .contact-sec { padding: 70px 0; }
        @media (max-width: 768px) {
          .contact-cards { grid-template-columns: 1fr 1fr; gap: 14px; }
          .contact-form-grid { grid-template-columns: 1fr; gap: 28px; }
          .contact-socials { grid-template-columns: 1fr; }
          .contact-container { padding: 0 20px; }
          .contact-sec { padding: 48px 0; }
        }
        @media (max-width: 480px) {
          .contact-cards { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />
      <main>
        <PageBanner title="Get In Touch With Us" crumb="Contact" bgImage={contactBg} />

        <section className="contact-sec" style={{ backgroundColor: "#fff", paddingBottom: "40px" }}>
          <div className="contact-container">
            <div className="contact-cards">
              {contactInfo.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                  style={{ backgroundColor: "#fff7ed", borderRadius: "20px", padding: "24px 18px", textAlign: "center", border: "1px solid #fed7aa", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ fontSize: "28px", marginBottom: "12px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "0 0 8px 0" }}>{item.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-sec" style={{ backgroundColor: "#fff", paddingTop: "40px" }}>
          <div className="contact-container">
            <div className="contact-form-grid">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
                style={{ backgroundColor: "#f9fafb", borderRadius: "24px", padding: "36px", border: "1px solid #f3f4f6" }}>
                <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>Send Us A Message</h2>
                <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px" }}>We'll get back to you within one business day.</p>
                {submitted && (
                  <div style={{ backgroundColor: "#dcfce7", border: "1px solid #86efac", borderRadius: "12px", padding: "12px 18px", marginBottom: "18px", color: "#166534", fontSize: "14px", fontWeight: 600 }}>
                    ✅ Message sent! We'll be in touch soon.
                  </div>
                )}
                {["name", "email", "subject"].map(field => (
                  <input key={field} name={field} type={field === "email" ? "email" : "text"} value={form[field]} onChange={handleChange}
                    placeholder={field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Subject"} required
                    style={{ width: "100%", padding: "13px 16px", borderRadius: "12px", border: "1px solid #e5e7eb", marginBottom: "14px", fontSize: "14px", boxSizing: "border-box" }} />
                ))}
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} required
                  style={{ width: "100%", padding: "13px 16px", borderRadius: "12px", border: "1px solid #e5e7eb", marginBottom: "20px", fontSize: "14px", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={handleSubmit} type="button"
                  style={{ backgroundColor: "#ea580c", color: "white", padding: "14px 0", borderRadius: "999px", fontWeight: 600, fontSize: "15px", border: "none", cursor: "pointer", width: "100%" }}>
                  Send Message
                </button>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", flex: 1 }}>
                  <iframe title="Restaurant Location"
                    src="https://maps.google.com/maps?q=Salem%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="300" style={{ border: 0, display: "block" }} loading="lazy" />
                </div>
                <div style={{ backgroundColor: "#f9fafb", borderRadius: "20px", padding: "22px", border: "1px solid #f3f4f6" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: "0 0 14px 0" }}>Follow Us</h3>
                  <div className="contact-socials">
                    {socials.map(s => (
                      <div key={s.name} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", backgroundColor: "white", borderRadius: "12px", border: "1px solid #f3f4f6" }}>
                        <span style={{ fontSize: "18px" }}>{s.icon}</span>
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: "#111827" }}>{s.name}</div>
                          <div style={{ fontSize: "11px", color: "#6b7280" }}>{s.handle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="contact-sec" style={{ backgroundColor: "#fff7ed" }}>
          <div className="contact-container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 800, color: "#111827" }}>Prefer To Just Walk In?</h2>
            <p style={{ marginTop: "14px", color: "#6b7280", fontSize: "15px" }}>We're open every day — but a quick reservation always saves you the wait.</p>
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

export default Contact;