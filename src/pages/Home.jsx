import { Link } from "react-router-dom";
import { plants, categories } from "../data/plants-fixed";

export default function Home() {
  const base = import.meta.env.BASE_URL;
  // Categorías con conteo real (excluye "all")
  const displayCategories = categories.filter((c) => c.id !== "all");

  return (
    <main>
      <section
        className="hero"
        style={{
          background:
            `linear-gradient(to bottom, rgba(47, 79, 62, 0.3), rgba(47, 79, 62, 0.6)), url('${base}img/sala-jardin.jpg') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h1 style={{ color: "#ffffff", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            Welcome to <span className="brand-highlight">TRAILING DREAMS</span>
          </h1>
          <p style={{ color: "#f0f0f0", fontWeight: "500", fontSize: "1.2rem", textShadow: "0 2px 8px rgba(0,0,0,0.4)", maxWidth: "600px", margin: "0 auto 30px" }}>
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
                  backgroundImage: cat.id === "tools" 
                    ? "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Watering_can.JPG/800px-Watering_can.JPG')" 
                    : `url('${base}img/${cat.id === "indoor" ? "monstera" : cat.id === "succulents" ? "Aloe-aristata" : cat.id === "tropical" ? "maranta-lima-naranja" : "Darlingtonia"}.jpg')`,
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
