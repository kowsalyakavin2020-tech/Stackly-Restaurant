import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="sec-pad-lg" style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>

        <SectionTitle
          subtitle="Testimonials"
          title="What Our Customers Say"
          description="Thousands of happy customers love our food and service."
        />

        {/* Rating summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="stack-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
            backgroundColor: "#fff7ed",
            border: "1px solid #fed7aa",
            borderRadius: "16px",
            padding: "18px 28px",
            marginBottom: "44px",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "#111827" }}>4.9</div>
          <div>
            <div style={{ display: "flex", justifyContent: "center", color: "#f59e0b", gap: "2px" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>
            <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "2px" }}>
              Based on 500+ verified reviews
            </div>
          </div>
        </motion.div>

        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                backgroundColor: "#f9fafb",
                borderRadius: "20px",
                padding: "36px 28px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                border: "1px solid #f3f4f6",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
              }}
            >
              {/* Quote icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#fff7ed",
                  color: "#ea580c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                }}
              >
                <FaQuoteLeft size={16} />
              </div>

              {/* Review text */}
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                  fontStyle: "italic",
                }}
              >
                "{item.review}"
              </p>

              {/* Divider */}
              <div
                style={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "#ea580c",
                  borderRadius: "999px",
                  margin: "0 auto 24px auto",
                }}
              />

              {/* Avatar */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  margin: "0 auto 14px auto",
                  display: "block",
                  border: "3px solid #ea580c",
                }}
              />

              {/* Name */}
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#111827",
                  margin: "0 0 6px 0",
                }}
              >
                {item.name}
              </h3>

              {/* Stars */}
              <div style={{ display: "flex", justifyContent: "center", gap: "2px", color: "#f59e0b" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;