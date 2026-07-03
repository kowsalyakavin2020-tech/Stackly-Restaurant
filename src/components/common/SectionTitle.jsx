import { motion } from "framer-motion";

function SectionTitle({ subtitle, title, description, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        textAlign: center ? "center" : "left",
        marginBottom: "40px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          backgroundColor: "#fff7ed",
          color: "#ea580c",
          padding: "8px 20px",
          borderRadius: "999px",
          fontWeight: 650,
          fontSize: "20px",
          marginBottom: "16px",
        }}
      >
        {subtitle}
      </span>

      <h2
        style={{
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          fontWeight: 800,
          color: "#111827",
          lineHeight: 1.2,
          margin: "0 0 16px 0",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            color: "#6b7280",
            fontSize: "16px",
            lineHeight: 1.8,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;