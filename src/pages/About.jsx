import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import aboutImg1 from "../assets/images/about/about-1.webp";
import aboutImg2 from "../assets/images/about/about-2.webp";
import heroFood from "../assets/images/hero/hero-2.webp";
import aboutBanner from "../assets/images/banners/about-banner.webp";

const values = [
  { icon: "🌿", title: "Fresh Ingredients", text: "Sourced daily from trusted local farms, never frozen, never compromised." },
  { icon: "👨‍🍳", title: "Expert Chefs", text: "Decades of combined experience shaping every plate that leaves our kitchen." },
  { icon: "🔥", title: "Authentic Recipes", text: "Traditional techniques passed down and perfected over 20 years." },
  { icon: "🤝", title: "Warm Hospitality", text: "Every guest is treated like family, from the first hello to the last bite." },
];

const timeline = [
  { year: "2004", title: "The Beginning", text: "Started as a small family kitchen in Salem with 5 tables and a big dream." },
  { year: "2009", title: "First Expansion", text: "Opened our second location and introduced our now-iconic weekend brunch menu." },
  { year: "2015", title: "Award Winning", text: "Recognised as Salem's Best Fine Dining Restaurant for three consecutive years." },
  { year: "2024", title: "20 Years Strong", text: "Serving 15,000+ happy customers annually with our signature passion and quality." },
];

const team = [
  { name: "John Smith", role: "Founder & Head Chef", quote: "Food is love made visible." },
  { name: "Emma Wilson", role: "Executive Chef", quote: "Every ingredient has a story." },
  { name: "David Brown", role: "Pastry Chef", quote: "Desserts are the last impression." },
];

function About() {
  return (
    <>
      <style>{`
        .about-story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .about-timeline-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .about-values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .about-philosophy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .about-team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .about-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
        .about-mini-stats { display: flex; gap: 32px; margin-top: 32px; padding: 24px; background: #fff7ed; border-radius: 16px; border: 1px solid #fed7aa; }
        .about-second-img { position: absolute; bottom: -40px; right: -30px; border: 4px solid white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .sec-pad { padding: 80px 0; }
        .container-main { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-timeline-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .about-values-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .about-philosophy-grid { grid-template-columns: 1fr; gap: 32px; }
          .about-team-grid { grid-template-columns: 1fr; gap: 20px; }
          .about-stats-grid { grid-template-columns: 1fr; gap: 16px; margin-bottom: 32px; }
          .about-mini-stats { gap: 16px; justify-content: space-around; }
          .about-second-img { display: none; }
          .sec-pad { padding: 48px 0; }
          .container-main { padding: 0 20px; }
        }
      `}</style>

      <Navbar />
      <main>
        <PageBanner title="Our Story, Served Fresh Daily" crumb="About" bgImage={aboutBanner} />

        {/* Section 1: Story */}
        <section className="sec-pad" style={{ backgroundColor: "#fff" }}>
          <div className="container-main">
            <div className="about-story-grid">
              <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ position: "relative" }}>
                <img src={aboutImg1} alt="Stackly Restaurant"
                  style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }} />
                <div className="about-second-img">
                  <img src={aboutImg2} alt="Our Chef" style={{ width: "160px", height: "160px", objectFit: "cover" }} />
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}
                  style={{ position: "absolute", top: "24px", left: "-16px", backgroundColor: "#ea580c", color: "white", borderRadius: "16px", padding: "16px 20px", textAlign: "center", boxShadow: "0 10px 30px rgba(234,88,12,0.4)" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800 }}>20+</div>
                  <div style={{ fontSize: "11px", fontWeight: 600 }}>Years of Excellence</div>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <span style={{ display: "inline-block", backgroundColor: "#fff7ed", color: "#ea580c", padding: "10px 22px", borderRadius: "999px", fontWeight: 650, fontSize: "15px", marginBottom: "20px" }}>Our Story</span>
                <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, color: "#111827", lineHeight: 1.2 }}>
                  Two Decades Of <span style={{ color: "#ea580c" }}>Culinary Passion</span>
                </h2>
                <p style={{ marginTop: "20px", color: "#6b7280", lineHeight: 1.9, fontSize: "15px" }}>
                  Stackly Restaurant began as a small family kitchen with one simple goal — to serve honest, delicious food made with care. Over 20 years later, that same philosophy still guides everything we plate.
                </p>
                <p style={{ marginTop: "12px", color: "#6b7280", lineHeight: 1.9, fontSize: "15px" }}>
                  Today, our expert chefs continue that tradition, blending authentic recipes with fresh, seasonal ingredients to create dishes our guests remember long after they leave.
                </p>
                <div className="about-mini-stats">
                  {[{ n: "15K+", l: "Customers" }, { n: "50+", l: "Chefs" }, { n: "200+", l: "Dishes" }].map(s => (
                    <div key={s.l} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "20px", fontWeight: 800, color: "#ea580c" }}>{s.n}</div>
                      <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <Link to="/menu" style={{ display: "inline-block", marginTop: "28px", backgroundColor: "#ea580c", color: "white", padding: "14px 32px", borderRadius: "999px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
                  Explore Our Menu →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Timeline */}
        <section className="sec-pad" style={{ backgroundColor: "#f9fafb" }}>
          <div className="container-main">
            <SectionTitle subtitle="Our Journey" title="20 Years In The Making" description="From a small kitchen dream to a beloved restaurant." />
            <div className="about-timeline-grid">
              {timeline.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  style={{ backgroundColor: "white", borderRadius: "20px", padding: "28px 20px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", backgroundColor: "#ea580c" }} />
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#ea580c", marginBottom: "10px" }}>{item.year}</div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: "0 0 8px 0" }}>{item.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Values */}
        <section className="sec-pad" style={{ backgroundColor: "#fff" }}>
          <div className="container-main">
            <SectionTitle subtitle="Why Choose Us" title="What Makes Us Different" description="Every detail designed around one goal: your experience." />
            <div className="about-values-grid">
              {values.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  style={{ backgroundColor: "white", borderRadius: "20px", padding: "28px 20px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #f3f4f6", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "14px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: "0 0 10px 0" }}>{item.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Philosophy */}
        <section className="sec-pad" style={{ backgroundColor: "#f9fafb" }}>
          <div className="container-main">
            <div className="about-philosophy-grid">
              <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <span style={{ display: "inline-block", backgroundColor: "#fed7aa", color: "#ea580c", padding: "8px 20px", borderRadius: "999px", fontWeight: 600, fontSize: "15px", marginBottom: "20px" }}>Our Philosophy</span>
                <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", fontWeight: 800, color: "#111827", lineHeight: 1.2, margin: "0 0 20px 0" }}>
                  Food Made With <span style={{ color: "#ea580c" }}>Intention</span>
                </h2>
                <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: 1.9, marginBottom: "16px" }}>
                  We believe great food starts long before it reaches the plate — in the choice of ingredients, the patience of preparation, and the people behind the kitchen line.
                </p>
                <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
                  That belief is why our guests keep coming back, and why we keep raising the bar every single day.
                </p>
                <div style={{ backgroundColor: "#fff7ed", borderLeft: "4px solid #ea580c", padding: "18px 22px", borderRadius: "0 12px 12px 0" }}>
                  <p style={{ color: "#111827", fontSize: "15px", fontStyle: "italic", fontWeight: 600, margin: 0 }}>"We don't just cook food — we craft memories."</p>
                  <p style={{ color: "#ea580c", fontSize: "13px", fontWeight: 600, marginTop: "8px", marginBottom: 0 }}>— John Smith, Founder</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <img src={heroFood} alt="Signature Dish" style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: Team */}
        <section className="sec-pad" style={{ backgroundColor: "#fff" }}>
          <div className="container-main">
            <SectionTitle subtitle="Our Team" title="The Faces Behind The Flavour" description="Passionate professionals who pour their heart into every dish." />
            <div className="about-team-grid">
              {team.map((member, i) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  style={{ backgroundColor: "#f9fafb", borderRadius: "20px", padding: "32px 24px", textAlign: "center", border: "1px solid #f3f4f6" }}>
                  <div style={{ width: "68px", height: "68px", backgroundColor: "#ea580c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", margin: "0 auto 18px auto" }}>👨‍🍳</div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>{member.name}</h3>
                  <p style={{ color: "#ea580c", fontWeight: 600, fontSize: "13px", marginBottom: "14px" }}>{member.role}</p>
                  <p style={{ color: "#6b7280", fontSize: "14px", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>"{member.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Stats CTA */}
        <section className="sec-pad" style={{ backgroundColor: "#111827" }}>
          <div className="container-main">
            <div className="about-stats-grid">
              {[{ number: "15K+", label: "Happy Customers" }, { number: "50+", label: "Expert Chefs" }, { number: "20+", label: "Years Experience" }].map(stat => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "28px", textAlign: "center" }}>
                  <h3 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#f97316" }}>{stat.number}</h3>
                  <p style={{ marginTop: "8px", color: "#e5e7eb", fontSize: "14px" }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "white", fontSize: "22px", fontWeight: 700, marginBottom: "20px" }}>Ready To Experience It Yourself?</h3>
              <Link to="/reservation" style={{ display: "inline-block", backgroundColor: "#ea580c", color: "white", padding: "14px 40px", borderRadius: "999px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
                Book A Table
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;