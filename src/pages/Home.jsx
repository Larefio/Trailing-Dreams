import { Link } from "react-router-dom";
import { plants, categories } from "../data/plants-fixed";

export default function Home() {
  // Categorías con conteo real (excluye "all")
  const displayCategories = categories.filter((c) => c.id !== "all");

  return (
    <main>
      <section
        className="hero"
        style={{
          background:
            "linear-gradient(rgba(255, 250, 246, 0.3), rgba(255, 250, 246, 0.8)), url('/img/sala-jardin.jpg') center/cover no-repeat",
        }}
      >
        <div className="container">
          <h1 style={{ color: "var(--text-primary)" }}>
            Welcome to Trailing Dreams
          </h1>
          <p style={{ color: "var(--text-secondary)", fontWeight: "bold" }}>
            We connect your home with nature. Specialists in unique species,
            exotic plants, and tools for their daily care.
          </p>
          <Link
            to="/shop"
            className="btn"
            style={{
              background: "var(--accent-terracotta)",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: "40px",
              fontWeight: "bold",
            }}
          >
            Explore Shop
          </Link>
        </div>
      </section>

      <section
        className="featured-categories container"
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "40px",
            color: "var(--text-primary)",
          }}
        >
          Shop by Category
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {displayCategories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              style={{
                display: "block",
                borderRadius: "30px",
                overflow: "hidden",
                position: "relative",
                height: "300px",
              }}
            >
              {/* Imagen representativa de la categoría */}
              <div
                className="cat-bg"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url('/img/${cat.id === "indoor" ? "monstera" : cat.id === "succulents" ? "Aloe-aristata" : cat.id === "tropical" ? "maranta-lima-naranja" : "Darlingtonia"}.jpg')`,
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(74, 74, 122, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "28px",
                    textShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  {cat.label}{" "}
                  <span style={{ fontWeight: "normal", fontSize: "18px" }}>
                    ({cat.count})
                  </span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
