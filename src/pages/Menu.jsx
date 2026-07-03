import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import { dishes } from "../data/dishes";
import { chefs } from "../data/chefs";
import menuBanner from "../assets/images/banners/menu-banner.webp";

const CATEGORIES = ["All", "Starters", "Main Course", "Desserts"];
const highlights = [
  { icon: "🌿", label: "100% Fresh Daily" },
  { icon: "🔥", label: "Authentic Recipes" },
  { icon: "👨‍🍳", label: "Expert Chefs" },
  { icon: "🌍", label: "Global Flavours" },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const taggedDishes = useMemo(() => dishes.map(dish => ({ ...dish, category: dish.category })), []);
  const filteredDishes = activeCategory === "All" ? taggedDishes : taggedDishes.filter(d => d.category === activeCategory);

  return (
    <>
      <style>{`
        .menu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .menu-highlights { display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; }
        .menu-chef-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .menu-dietary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .menu-container { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .menu-sec { padding: 80px 0; }
        @media (max-width: 768px) {
          .menu-grid { grid-template-columns: 1fr; gap: 20px; }
          .menu-highlights { gap: 20px; justify-content: flex-start; padding: 0 20px; }
          .menu-chef-grid { grid-template-columns: 1fr; gap: 32px; }
          .menu-dietary-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .menu-container { padding: 0 20px; }
          .menu-sec { padding: 48px 0; }
        }
        @media (max-width: 480px) {
          .menu-dietary-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />
      <main>
        <PageBanner title="Our Full Menu" crumb="Menu" bgImage={menuBanner} />

        {/* Highlights */}
        <section style={{ padding: "24px 0", backgroundColor: "#fff7ed", borderBottom: "1px solid #fed7aa" }}>
          <div className="menu-container">
            <div className="menu-highlights">
              {highlights.map(h => (
                <div key={h.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px" }}>{h.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: "14px", color: "#111827" }}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dishes */}
        <section className="menu-sec" style={{ backgroundColor: "#fff" }}>
          <div className="menu-container">
            <SectionTitle subtitle="Our Menu" title="Handcrafted Dishes For Every Craving" description="Fresh ingredients, authentic recipes, unforgettable taste." />
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{ padding: "9px 22px", borderRadius: "999px", border: activeCategory === cat ? "2px solid #ea580c" : "2px solid #e5e7eb", backgroundColor: activeCategory === cat ? "#ea580c" : "white", color: activeCategory === cat ? "white" : "#374151", fontWeight: 600, fontSize: "14px", cursor: "pointer", transition: "all 0.2s" }}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="menu-grid">
              {filteredDishes.map((dish, index) => (
                <motion.div key={dish.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.06 }} viewport={{ once: true }}
                  style={{ backgroundColor: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #f3f4f6", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; }}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img src={dish.image} alt={dish.name} style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", top: "14px", left: "14px", backgroundColor: "rgba(17,24,39,0.85)", color: "white", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600 }}>{dish.category}</div>
                    <div style={{ position: "absolute", top: "14px", right: "14px", backgroundColor: "#ea580c", color: "white", padding: "5px 14px", borderRadius: "999px", fontSize: "13px", fontWeight: 700 }}>{dish.price}</div>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", gap: "8px" }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: 0 }}>{dish.name}</h3>
                      <span style={{ fontSize: "13px", color: "#f59e0b", fontWeight: 600, whiteSpace: "nowrap" }}>{dish.rating}</span>
                    </div>
                    <Link to="/notfound" style={{ display: "block", textAlign: "center", backgroundColor: "#ea580c", color: "white", padding: "11px 0", borderRadius: "999px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                      Order Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Chef's Special */}
        <section className="menu-sec" style={{ backgroundColor: "#111827" }}>
          <div className="menu-container">
            <div className="menu-chef-grid">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
                <span style={{ display: "inline-block", backgroundColor: "#ea580c", color: "white", padding: "8px 20px", borderRadius: "999px", fontWeight: 600, fontSize: "14px", marginBottom: "18px" }}>Chef's Special</span>
                <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 800, color: "white", lineHeight: 1.2 }}>
                  Curated Weekly By <span style={{ color: "#f97316" }}>{chefs?.[0]?.name || "Our Head Chef"}</span>
                </h2>
                <p style={{ marginTop: "16px", color: "#d1d5db", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
                  Every week our head chef hand-picks a rotating selection of seasonal dishes — ask your server what's featured today.
                </p>
                <Link to="/reservation" style={{ display: "inline-block", backgroundColor: "#ea580c", color: "white", padding: "13px 32px", borderRadius: "999px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
                  Reserve A Table
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ display: "flex", justifyContent: "center" }}>
                {chefs?.[0]?.image && (
                  <img src={chefs[0].image} alt={chefs[0].name} style={{ width: "260px", maxWidth: "100%", height: "260px", borderRadius: "24px", objectFit: "cover", border: "3px solid #ea580c", boxShadow: "0 0 40px rgba(234,88,12,0.3)" }} />
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dietary */}
        <section style={{ padding: "60px 0", backgroundColor: "#f9fafb" }}>
          <div className="menu-container">
            <div className="menu-dietary-grid">
              {[{ icon: "🥗", title: "Vegetarian", text: "Wide range of plant-based options." },
                { icon: "🌾", title: "Gluten Free", text: "Available on request." },
                { icon: "🥛", title: "Dairy Free", text: "Clearly marked on our menu." },
                { icon: "🌶️", title: "Spice Levels", text: "Mild to fiery — your choice." }].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                  style={{ backgroundColor: "white", borderRadius: "16px", padding: "22px", textAlign: "center", border: "1px solid #f3f4f6", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: "30px", marginBottom: "10px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>{item.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "70px 0", backgroundColor: "#fff7ed" }}>
          <div className="menu-container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 800, color: "#111827" }}>Craving Something From The Menu?</h2>
            <p style={{ marginTop: "14px", color: "#6b7280", fontSize: "15px" }}>Reserve your table now and let us bring the menu to you.</p>
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

export default Menu;