import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import { blogs } from "../data/blogs";
import blogBanner from "../assets/images/banners/blog-banner.webp";

function Blog() {
  const [email, setEmail] = useState("");
  const [featured, ...rest] = blogs;

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <>
      <style>{`
        .blog-featured-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 0; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .blog-featured-img { width: 100%; height: 420px; object-fit: cover; display: block; }
        .blog-featured-content { background: #111827; padding: 48px; display: flex; flex-direction: column; justify-content: center; }
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .blog-newsletter-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .blog-container { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        .blog-sec { padding: 80px 0; }
        @media (max-width: 768px) {
          .blog-featured-grid { grid-template-columns: 1fr; }
          .blog-featured-img { height: 240px; }
          .blog-featured-content { padding: 28px; }
          .blog-grid { grid-template-columns: 1fr; gap: 20px; }
          .blog-newsletter-row input { min-width: 0; width: 100%; }
          .blog-container { padding: 0 20px; }
          .blog-sec { padding: 48px 0; }
        }
      `}</style>

      <Navbar />
      <main>
        <PageBanner title="News, Recipes & Stories" crumb="Blog" bgImage={blogBanner} />

        {featured && (
          <section className="blog-sec" style={{ backgroundColor: "#fff", paddingBottom: "40px" }}>
            <div className="blog-container">
              <div style={{ marginBottom: "20px" }}>
                <span style={{ backgroundColor: "#fff7ed", color: "#ea580c", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 600 }}>Featured Post</span>
              </div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                className="blog-featured-grid">
                <img src={featured.image} alt={featured.title} className="blog-featured-img" />
                <div className="blog-featured-content">
                  <span style={{ display: "inline-block", backgroundColor: "#ea580c", color: "white", padding: "4px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, width: "fit-content", marginBottom: "16px" }}>{featured.date}</span>
                  <h2 style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 800, color: "white", lineHeight: 1.35, margin: "0 0 14px 0" }}>{featured.title}</h2>
                  <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.8, marginBottom: "22px" }}>{featured.description}</p>
                  <Link to="/blog" style={{ color: "#f97316", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>Read Full Story →</Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        <section className="blog-sec" style={{ backgroundColor: "#fff", paddingTop: "40px" }}>
          <div className="blog-container">
            <SectionTitle subtitle="Latest Articles" title="More From Our Kitchen" description="Recipes, tips and everything happening at Stackly." />
            <div className="blog-grid">
              {(rest.length ? rest : blogs).map((blog, index) => (
                <motion.div key={blog.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                  style={{ backgroundColor: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "1px solid #f3f4f6", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; }}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "210px", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "#ea580c", color: "white", padding: "4px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: 600 }}>{blog.date}</div>
                  </div>
                  <div style={{ padding: "22px" }}>
                    <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", lineHeight: 1.5, margin: "0 0 10px 0" }}>{blog.title}</h3>
                    <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7, margin: "0 0 16px 0" }}>{blog.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Link to="/blog" style={{ color: "#ea580c", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>Read More →</Link>
                      <span style={{ fontSize: "12px", color: "#9ca3af" }}>5 min read</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 0", backgroundColor: "#fff7ed" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
            <span style={{ display: "inline-block", backgroundColor: "#ea580c", color: "white", padding: "8px 20px", borderRadius: "999px", fontWeight: 600, fontSize: "14px", marginBottom: "18px" }}>Newsletter</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#111827" }}>Never Miss A Recipe</h2>
            <p style={{ marginTop: "12px", color: "#6b7280", fontSize: "15px" }}>Subscribe for new articles, recipes and restaurant updates straight to your inbox.</p>
            <form onSubmit={handleSubscribe} className="blog-newsletter-row" style={{ marginTop: "28px" }}>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"
                style={{ padding: "14px 20px", borderRadius: "999px", border: "1px solid #fed7aa", fontSize: "14px", minWidth: "260px", outline: "none", flexGrow: 1 }} />
              <button type="submit" style={{ backgroundColor: "#ea580c", color: "white", padding: "14px 28px", borderRadius: "999px", fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer" }}>
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;