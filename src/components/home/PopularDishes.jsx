import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaStar, FaFire } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import { dishes } from "../../data/dishes";

function PopularDishes() {
  return (
    <section className="sec-pad-lg" style={{ position: "relative", padding: "70px 0 80px 0", backgroundColor: "#f9fafb", overflow: "hidden" }}>
      {/* Decorative blur */}
      <div
        className="decor-hide-mobile"
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234,88,12,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px", position: "relative" }}>

        <SectionTitle
          subtitle="Popular Dishes"
          title="Our Best Selling Foods"
          description="Fresh ingredients, authentic recipes and unforgettable taste."
        />

        <div
          className="grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
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
                  src={dish.image}
                  alt={dish.name}
                  className="img-med"
                  style={{
                    width: "100%",
                    height: "230px",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />

                {/* Best seller ribbon on the first dish */}
                {index === 0 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      backgroundColor: "#111827",
                      color: "#f97316",
                      padding: "5px 12px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    <FaFire size={11} /> Best Seller
                  </div>
                )}

                {/* Price badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    backgroundColor: "#ea580c",
                    color: "white",
                    padding: "5px 14px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(234,88,12,0.4)",
                  }}
                >
                  {dish.price}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: "22px 22px 26px 22px" }}>

                {/* Name + Rating */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    gap: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#111827",
                      margin: 0,
                    }}
                  >
                    {dish.name}
                  </h3>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "13px",
                      color: "#f59e0b",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <FaStar size={12} />
                    {dish.rating}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "6px", marginBottom: "18px", flexWrap: "wrap" }}>
                  {["Chef's Special", "Freshly Made"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#9a3412",
                        backgroundColor: "#fff7ed",
                        border: "1px solid #fed7aa",
                        padding: "3px 9px",
                        borderRadius: "999px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Order Button */}
                <Link
                  to="/notfound"
                  style={{
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "#ea580c",
                    color: "white",
                    padding: "12px 0",
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#c2410c")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#ea580c")}
                >
                  Order Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div style={{ textAlign: "center", marginTop: "52px" }}>
          <Link
            to="/menu"
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
            View All Menu
          </Link>
        </div>

      </div>
    </section>
  );
}

export default PopularDishes;