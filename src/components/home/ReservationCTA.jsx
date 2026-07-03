import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone, FaClock, FaCircleCheck } from "react-icons/fa6";
import reservationImg from "../../assets/images/reservation/reservation-1.webp";

function ReservationCTA() {
  return (
    <section className="sec-pad-lg" style={{ position: "relative", padding: "80px 0", backgroundColor: "#fff7ed", overflow: "hidden" }}>
      {/* Decorative dot pattern */}
      <div
        className="decor-hide-mobile"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "180px",
          height: "180px",
          backgroundImage: "radial-gradient(#fed7aa 2px, transparent 2px)",
          backgroundSize: "18px 18px",
          opacity: 0.7,
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
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#fed7aa",
                color: "#ea580c",
                padding: "8px 20px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "15px",
                marginBottom: "20px",
              }}
            >
              Reservation
            </span>

            <h2
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1.2,
                margin: "0 0 20px 0",
              }}
            >
              Reserve Your Table{" "}
              <span style={{ color: "#ea580c" }}>Today</span>
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "15px",
                lineHeight: 1.9,
                marginBottom: "20px",
              }}
            >
              Enjoy a memorable dining experience with your family and friends.
              Book your table in advance and let us serve you the finest dishes
              prepared by our expert chefs.
            </p>

            {/* Info items */}
            {[
              { icon: <FaLocationDot />, text: "123 Food Street, Chennai, Tamil Nadu" },
              { icon: <FaPhone />, text: "+91 98765 43210" },
              { icon: <FaClock />, text: "Mon–Sun: 9:00 AM – 11:00 PM" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    color: "#ea580c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </span>
                <span style={{ color: "#374151", fontSize: "15px", fontWeight: 500 }}>
                  {item.text}
                </span>
              </motion.div>
            ))}

            {/* Trust row */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "24px",
                flexWrap: "wrap",
              }}
            >
              {["Instant Confirmation", "Free Cancellation", "No Booking Fee"].map((label) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <FaCircleCheck size={14} color="#16a34a" />
                  <span style={{ fontSize: "13px", color: "#374151", fontWeight: 500 }}>{label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/reservation"
              style={{
                display: "inline-block",
                marginTop: "28px",
                backgroundColor: "#ea580c",
                color: "white",
                padding: "14px 36px",
                borderRadius: "999px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(234,88,12,0.35)",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#c2410c";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ea580c";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book A Table
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            <img
              src={reservationImg}
              alt="Reservation"
              className="img-tall"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
                borderRadius: "24px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                display: "block",
              }}
            />

            {/* Special Events badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="badge-float"
              style={{
                position: "absolute",
                bottom: "24px",
                right: "24px",
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "16px 20px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🍽️</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#111827" }}>
                  Special Events
                </div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>
                  Corporate & Private Dining
                </div>
              </div>
            </motion.div>

            {/* Tables available badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="badge-float-top"
              style={{
                position: "absolute",
                top: "24px",
                left: "24px",
                backgroundColor: "rgba(255,255,255,0.95)",
                borderRadius: "999px",
                padding: "8px 16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#16a34a" }} />
              12 Tables Available Today
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ReservationCTA;