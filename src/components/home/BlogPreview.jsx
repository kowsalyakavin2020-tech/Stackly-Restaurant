import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import { blogs } from "../../data/blogs";

function BlogPreview() {
  return (
    <section className="sec-pad-lg" style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>

        <SectionTitle
          subtitle="Latest Blog"
          title="News & Articles"
          description="Read our latest food stories, recipes and restaurant updates."
        />

        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-med"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                {/* Date badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    backgroundColor: "#ea580c",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {blog.date}
                </div>

                {/* Reading time badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    backgroundColor: "rgba(15,23,42,0.75)",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  <FaRegClock size={11} />
                  {4 + (index % 3) * 2} min read
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: 1.5,
                    margin: "0 0 12px 0",
                  }}
                >
                  {blog.title}
                </h3>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    margin: "0 0 20px 0",
                  }}
                >
                  {blog.description}
                </p>

                <Link
                  to="/notfound"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#ea580c",
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.gap = "10px")}
                  onMouseLeave={(e) => (e.target.style.gap = "6px")}
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            to="/blog"
            style={{
              display: "inline-block",
              border: "2px solid #ea580c",
              color: "#ea580c",
              padding: "13px 40px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ea580c";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#ea580c";
            }}
          >
            View All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}

export default BlogPreview;