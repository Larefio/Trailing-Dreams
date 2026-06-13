import { useContext } from 'react';
import { Link } from "react-router-dom";
import { categories } from "../data/plants-fixed";
import { motion } from 'framer-motion';
import { ProductContext } from '../context/ProductContext';

export default function Home() {
  const { products } = useContext(ProductContext);
  const base = import.meta.env.BASE_URL;
  // Categorías con conteo real (excluye "all")
  const displayCategories = categories.filter((c) => c.id !== "all");

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section
        className="hero"
        style={{
          background: `linear-gradient(to bottom, rgba(21, 22, 40, 0.6), rgba(21, 22, 40, 0.8)), url('${base}img/sala-jardin.jpg') center center no-repeat`,
        }}
      >
        <div className="container">
          <h1 style={{ color: "#ffffff", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
            Welcome to <span className="brand-highlight">TRAILING DREAMS</span>
          </h1>
          <p style={{ color: "#f0f0f0", fontWeight: "500", fontSize: "1.2rem", textShadow: "0 2px 8px rgba(0,0,0,0.4)", maxWidth: "600px", margin: "0 auto 30px" }}>
            We connect your home with nature. Specialists in unique species,
            exotic products, and tools for their daily care.
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
                  backgroundImage: cat.id === "jardineria" 
                    ? "url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Potting_soil.jpg/500px-Potting_soil.jpg')" 
                    : cat.id === "bases" 
                    ? "url('https://promart.vteximg.com.br/arquivos/ids/9725239/166344.png?v=638996257464930000')" 
                    : cat.id === "riego" 
                    ? "url('https://promart.vteximg.com.br/arquivos/ids/9367120/162001.jpg?v=638939201854500000')" 
                    : cat.id === "herramientas" 
                    ? "url('https://promart.vteximg.com.br/arquivos/ids/10739894/imageUrl_1.jpg?v=639149117585100000')" 
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
    </motion.main>
  );
}
