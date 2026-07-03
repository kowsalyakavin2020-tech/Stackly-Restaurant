import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImg1 from "../../assets/images/about/about-1.webp";
import aboutImg2 from "../../assets/images/about/about-2.webp";

function HomeAbout() {
  return (
    <section className="sec-pad-lg" style={{ position: "relative", padding: "96px 0", backgroundColor: "#fff", overflow: "hidden" }}>
      {/* Decorative dot grid */}
      <div
        className="decor-hide-mobile"
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          width: "140px",
          height: "140px",
          backgroundImage: "radial-gradient(#fed7aa 2px, transparent 2px)",
          backgroundSize: "16px 16px",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px", position: "relative" }}>
        <div
          className="split"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* LEFT — Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            <img
              src={aboutImg1}
              alt="About Restaurant"
              className="img-tall"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "24px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                display: "block",
              }}
            />

            {/* Second image overlap */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="decor-hide-mobile"
              style={{
                position: "absolute",
                bottom: "-40px",
                right: "-30px",
                border: "4px solid white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={aboutImg2}
                alt="Chef"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                top: "32px",
                left: "16px",
                backgroundColor: "#ea580c",
                color: "white",
                borderRadius: "16px",
                padding: "16px 24px",
                boxShadow: "0 10px 30px rgba(234,88,12,0.4)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 800 }}>20+</div>
              <div style={{ fontSize: "13px", fontWeight: 500 }}>Years Experience</div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ paddingBottom: "40px" }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#fff7ed",
                color: "#ea580c",
                padding: "10px 22px",
                borderRadius: "999px",
                fontWeight: 650,
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              About Us
            </span>

            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1.2,
              }}
            >
              We Create Delicious Food{" "}
              <span style={{ color: "#ea580c" }}>For Every Occasion</span>
            </h2>

            <p style={{ marginTop: "20px", color: "#6b7280", lineHeight: 1.9, fontSize: "15px" }}>
              At Stackly Restaurant, we believe every meal should become a memorable experience.
              Our chefs prepare every dish using fresh ingredients, premium recipes and authentic
              cooking techniques.
            </p>

            <p style={{ marginTop: "12px", color: "#6b7280", lineHeight: 1.9, fontSize: "15px" }}>
              From family dinners to corporate events, we proudly serve thousands of happy
              customers with passion and excellence.
            </p>

            {/* Quote strip */}
            <div
              style={{
                marginTop: "24px",
                borderLeft: "3px solid #ea580c",
                paddingLeft: "18px",
                fontStyle: "italic",
                color: "#374151",
                fontSize: "14.5px",
                lineHeight: 1.7,
              }}
            >
              "Good food is the foundation of genuine happiness — every plate we send out carries
              that belief."
              <div style={{ marginTop: "6px", fontStyle: "normal", fontWeight: 700, color: "#111827", fontSize: "13px" }}>
                — Head Chef, Stackly Restaurant
              </div>
            </div>

            {/* Feature cards */}
            <div
              className="grid-4"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginTop: "32px",
              }}
            >
              {[
                {
                  icon: "🌿",
                  title: "Fresh Ingredients",
                  text: "Every dish is prepared using fresh and premium quality ingredients sourced daily.",
                },
                {
                  icon: "👨‍🍳",
                  title: "Expert Chefs",
                  text: "Our experienced chefs deliver authentic taste with passion and perfection.",
                },
                {
                  icon: "⏱️",
                  title: "Always On Time",
                  text: "Prompt service and fast table turnaround, without ever rushing your meal.",
                },
                {
                  icon: "💛",
                  title: "Loved By Guests",
                  text: "Rated 4.9/5 by hundreds of returning customers across the city.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    backgroundColor: "#fff7ed",
                    borderRadius: "16px",
                    padding: "24px",
                    border: "1px solid #fed7aa",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(234,88,12,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#111827" }}>
                    {item.title}
                  </h3>
                  <p style={{ marginTop: "8px", color: "#6b7280", fontSize: "14px", lineHeight: 1.7 }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <Link
              to="/about"
              style={{
                display: "inline-block",
                marginTop: "32px",
                backgroundColor: "#ea580c",
                color: "white",
                padding: "14px 32px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(234,88,12,0.35)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Learn More →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout; 