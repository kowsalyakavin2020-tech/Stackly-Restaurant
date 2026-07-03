import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import faqBg from "../assets/images/banners/faq-banner.webp";

const faqs = [
  { q: "Do I need a reservation to dine in?", a: "Walk-ins are always welcome, but we recommend booking ahead, especially on weekends and evenings, to guarantee a table." },
  { q: "Do you accommodate dietary restrictions?", a: "Yes, our menu includes vegetarian and vegan options, and our chefs are happy to adjust dishes for common allergies on request." },
  { q: "Can I host a private event or party here?", a: "Absolutely. We host corporate dinners, birthdays and private celebrations — reach out through our Contact page to plan one." },
  { q: "What are your opening hours?", a: "We're open every day from 9:00 AM to 11:00 PM, including public holidays." },
  { q: "Do you offer home delivery?", a: "Yes, delivery is available within Salem through our partner apps as well as direct phone orders." },
  { q: "Is parking available at the restaurant?", a: "Yes, we have dedicated parking space for both two-wheelers and cars right outside the restaurant." },
  { q: "Do you offer gift cards?", a: "Yes! Our gift cards are available in any denomination and can be purchased at the restaurant or by calling us." },
  { q: "Can I customise a dish for a special occasion?", a: "Absolutely. Let us know in advance and our chefs will do their best to create a personalised dish for your special moment." },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div style={{ backgroundColor: "white", borderRadius: "16px", border: isOpen ? "1px solid #ea580c" : "1px solid #f3f4f6", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", overflow: "hidden", transition: "border 0.2s" }}>
      <button onClick={onClick} style={{ width: "100%", padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "12px" }}>
        <span style={{ fontWeight: 700, fontSize: "15px", color: isOpen ? "#ea580c" : "#111827", lineHeight: 1.4 }}>{item.q}</span>
        <span style={{ color: "#ea580c", fontSize: "22px", fontWeight: 700, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}>+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div style={{ padding: "0 20px 20px 20px" }}>
              <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        .faq-quick { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .faq-container { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .faq-inner { max-width: 820px; margin: 0 auto; padding: 0 48px; }
        @media (max-width: 768px) {
          .faq-quick { grid-template-columns: 1fr; gap: 14px; }
          .faq-container { padding: 0 20px; }
          .faq-inner { padding: 0 20px; }
        }
      `}</style>

      <Navbar />
      <main>
        <PageBanner title="Frequently Asked Questions" crumb="FAQ" bgImage={faqBg} />

        <section style={{ padding: "72px 0 40px 0", backgroundColor: "#fff" }}>
          <div className="faq-inner">
            <SectionTitle subtitle="FAQ" title="Got Questions? We've Got Answers" description="Everything you need to know before your next visit." />
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {faqs.map((item, index) => (
                <motion.div key={item.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }}>
                  <FAQItem item={item} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? -1 : index)} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "56px 0", backgroundColor: "#f9fafb" }}>
          <div className="faq-container">
            <div className="faq-quick">
              {[
                { icon: "📞", title: "Call Us", text: "+91 98765 43210" },
                { icon: "✉️", title: "Email Us", text: "hello@stacklyrestaurant.com" },
                { icon: "📍", title: "Visit Us", text: "MMR Complex, Chinna Thirupathi, Salem" },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                  style={{ backgroundColor: "white", borderRadius: "16px", padding: "24px 20px", textAlign: "center", border: "1px solid #f3f4f6", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ fontSize: "26px", marginBottom: "10px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>{item.title}</h3>
                  <p style={{ color: "#ea580c", fontSize: "13px", fontWeight: 600, margin: 0 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 0", backgroundColor: "#fff7ed" }}>
          <div className="faq-container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 800, color: "#111827" }}>Still Have A Question?</h2>
            <p style={{ marginTop: "14px", color: "#6b7280", fontSize: "15px" }}>Our team is happy to help — reach out anytime.</p>
            <Link to="/contact" style={{ display: "inline-block", marginTop: "28px", backgroundColor: "#ea580c", color: "white", padding: "14px 36px", borderRadius: "999px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FAQ;