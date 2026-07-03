import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";
import reservationImg from "../assets/images/reservation/reservation-1.webp";
import reservationBanner from "../assets/images/banners/reservation-banner.webp";

const steps = [
  { icon: "🗓️", title: "Pick A Date", text: "Choose your preferred date and time slot." },
  { icon: "👥", title: "Add Details", text: "Tell us party size and any special requests." },
  { icon: "✅", title: "Get Confirmed", text: "We confirm your table within minutes." },
  { icon: "🍽️", title: "Enjoy Your Meal", text: "Arrive and let us take care of the rest." },
];

const amenities = [
  { icon: "🎂", title: "Birthday Celebrations", text: "Special decorations and a complimentary dessert." },
  { icon: "💍", title: "Romantic Evenings", text: "Intimate corner tables with candle lighting." },
  { icon: "🏢", title: "Corporate Dining", text: "Private rooms available for business meetings." },
  { icon: "👨‍👩‍👧", title: "Family Gatherings", text: "Kid-friendly options and spacious seating." },
];

function Reservation() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "", notes: "" });
  };

  return (
    <>
      <style>{`
        .res-main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .res-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
        .res-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .res-amenities { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .res-info-strips { margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
        .res-container { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .res-sec { padding: 72px 0; }
        @media (max-width: 768px) {
          .res-main-grid { grid-template-columns: 1fr; gap: 36px; }
          .res-form-row { grid-template-columns: 1fr; }
          .res-steps { grid-template-columns: 1fr 1fr; gap: 14px; }
          .res-amenities { grid-template-columns: 1fr 1fr; gap: 14px; }
          .res-container { padding: 0 20px; }
          .res-sec { padding: 48px 0; }
        }
        @media (max-width: 480px) {
          .res-steps { grid-template-columns: 1fr; }
          .res-amenities { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />
      <main>
        <PageBanner title="Reserve Your Table" crumb="Reservation" bgImage={reservationBanner} />

        <section className="res-sec" style={{ backgroundColor: "#fff" }}>
          <div className="res-container">
            <div className="res-main-grid">

              {/* Left: Image */}
              <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <div style={{ position: "relative" }}>
                  <img src={reservationImg} alt="Reservation"
                    style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.15)", display: "block" }} />
                  <div style={{ position: "absolute", bottom: "20px", right: "20px", backgroundColor: "white", borderRadius: "14px", padding: "14px 18px", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "22px" }}>📞</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "13px", color: "#111827" }}>Call To Confirm</div>
                      <div style={{ fontSize: "12px", color: "#6b7280" }}>+91 98765 43210</div>
                    </div>
                  </div>
                </div>
                <div className="res-info-strips">
                  {[
                    { icon: "🕐", text: "Open Every Day · 9AM – 11PM" },
                    { icon: "📍", text: "MMR Complex, Chinna Thirupathi, Salem, Tamil Nadu 636008" },
                    { icon: "✅", text: "Instant confirmation via email" },
                  ].map(item => (
                    <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 14px", backgroundColor: "#fff7ed", borderRadius: "12px", border: "1px solid #fed7aa" }}>
                      <span style={{ fontSize: "16px", marginTop: "1px" }}>{item.icon}</span>
                      <span style={{ fontSize: "13px", color: "#374151", fontWeight: 500, lineHeight: 1.5 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                style={{ backgroundColor: "#f9fafb", borderRadius: "24px", padding: "36px", border: "1px solid #f3f4f6" }}>
                <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#111827", marginBottom: "8px" }}>Book A Table</h2>
                <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px" }}>Fill in your details and we'll confirm shortly.</p>
                {submitted && (
                  <div style={{ backgroundColor: "#dcfce7", border: "1px solid #86efac", borderRadius: "12px", padding: "12px 16px", marginBottom: "18px", color: "#166534", fontSize: "14px", fontWeight: 600 }}>
                    🎉 Table request received! Check your email.
                  </div>
                )}
                <div className="res-form-row">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: "14px" }} />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: "14px" }} />
                </div>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: "14px", marginBottom: "14px", boxSizing: "border-box" }} />
                <div className="res-form-row">
                  <input name="date" type="date" value={form.date} onChange={handleChange} required style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: "14px" }} />
                  <input name="time" type="time" value={form.time} onChange={handleChange} required style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: "14px" }} />
                </div>
                <div className="res-form-row">
                  <select name="guests" value={form.guests} onChange={handleChange} style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: "14px" }}>
                    {[1, 2, 3, 4, 5, 6, "7+"].map(n => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                  </select>
                  <select name="occasion" value={form.occasion} onChange={handleChange} style={{ padding: "12px 14px", borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: "14px" }}>
                    <option value="">Occasion (Optional)</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="family">Family Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Special requests (optional)" rows={3}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1px solid #e5e7eb", fontSize: "14px", resize: "none", marginBottom: "18px", boxSizing: "border-box" }} />
                <button type="button" onClick={handleSubmit}
                  style={{ width: "100%", backgroundColor: "#ea580c", color: "white", padding: "14px 0", borderRadius: "999px", fontWeight: 600, fontSize: "15px", border: "none", cursor: "pointer" }}>
                  Confirm Reservation
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="res-sec" style={{ backgroundColor: "#f9fafb" }}>
          <div className="res-container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span style={{ display: "inline-block", backgroundColor: "#fff7ed", color: "#ea580c", padding: "8px 20px", borderRadius: "999px", fontWeight: 600, fontSize: "14px", marginBottom: "14px" }}>How It Works</span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 800, color: "#111827" }}>Four Simple Steps</h2>
            </div>
            <div className="res-steps">
              {steps.map((step, i) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  style={{ backgroundColor: "white", borderRadius: "20px", padding: "28px 20px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", position: "relative" }}>
                  <div style={{ position: "absolute", top: "14px", right: "14px", width: "26px", height: "26px", backgroundColor: "#ea580c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "11px", fontWeight: 700 }}>{i + 1}</div>
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>{step.icon}</div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: "0 0 8px 0" }}>{step.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="res-sec" style={{ backgroundColor: "#fff" }}>
          <div className="res-container">
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span style={{ display: "inline-block", backgroundColor: "#fff7ed", color: "#ea580c", padding: "8px 20px", borderRadius: "999px", fontWeight: 600, fontSize: "14px", marginBottom: "14px" }}>Special Occasions</span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 800, color: "#111827" }}>Every Occasion Deserves The Best</h2>
            </div>
            <div className="res-amenities">
              {amenities.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                  style={{ backgroundColor: "#fff7ed", borderRadius: "20px", padding: "24px 20px", textAlign: "center", border: "1px solid #fed7aa", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "0 0 8px 0" }}>{item.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "0" }}>
          <iframe title="Restaurant Location"
            src="https://maps.google.com/maps?q=Salem%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%" height="380" style={{ border: 0, display: "block" }} loading="lazy" />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Reservation;