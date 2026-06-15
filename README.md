# 🌿 Trailing Dreams

Bienvenido a **Trailing Dreams**, una aplicación de comercio electrónico (SPA) premium dedicada a plantas exóticas, suculentas y cuidado botánico.

Este proyecto fue diseñado con un fuerte enfoque en la Experiencia de Usuario (UX) y una arquitectura moderna de desarrollo Frontend.

![Trailing Dreams Preview](./public/img/preview.png)

---

## 🚀 Despliegue en Vivo (Deploy)

Puedes visitar la aplicación funcional aquí: **[Trailing Dreams - Live Deploy](https://larefio.github.io/Trailing-Dreams/)**

---

## 🏗️ Cómo está compuesto el proyecto (Arquitectura)

El proyecto está desarrollado íntegramente como una **Single Page Application (SPA)** utilizando **React.js**. En lugar de tener múltiples archivos HTML pesados, la aplicación está dividida en piezas de código reutilizables (Componentes) que se inyectan dinámicamente en una sola pantalla.

### 🛠️ Tecnologías Principales (Tech Stack)

- **Motor Principal:** React 18
- **Empaquetador (Bundler):** Vite (para compilación súper rápida)
- **Enrutamiento:** React Router v6
- **Animaciones:** Framer Motion
- **Estilos:** Vanilla CSS (con sistema de Variables nativas)

### 📁 Estructura de Carpetas

La arquitectura del código fuente (`Source Code`) está organizada de manera modular en la carpeta `src/`:

1. **`components/` (Componentes Reutilizables):**

   Aquí se encuentran las piezas visuales como la barra de navegación (`Navbar`), el pie de página (`Footer`) y las tarjetas de productos. Se programan una vez y se reutilizan en toda la aplicación.

2. **`pages/` (Vistas de la Aplicación):**
   Contiene las páginas principales que el usuario visita (`Home`, `Shop`, `Cart`, `Checkout`). El cambio entre estas páginas es instantáneo gracias a React Router.

3. **`context/` (Manejo del Estado Global):**
   El "cerebro" lógico de la tienda. Utiliza **React Context API** (`CartContext.jsx`, `ProductContext.jsx`) para crear una memoria global. Esto permite que la aplicación recuerde qué productos están en el carrito de compras sin importar por qué página estés navegando.

4. **`data/` (Base de Datos Local):**
   Archivos que simulan una base de datos (`plants-fixed.js`), los cuales proveen de manera dinámica los datos, precios e imágenes al resto de la aplicación.

5. **`index.css` (Sistema de Diseño Global):**
   Archivo maestro de estilos donde se utilizan **Variables CSS** (ej. `--bg-primary`) para implementar un esquema de colores consistente y permitir un modo oscuro nativo.

---

## ✨ Características Principales

- **Lazy Loading (Code Splitting):** El código se descarga a demanda a medida que el usuario navega, haciendo que la primera carga sea instantánea.
- **Modo Oscuro (Dark Mode):** Diseño basado en Glassmorphism con un modo oscuro profundo y ergonómico.
- **Manejo Dinámico del Carrito:** Cálculo automático de subtotales e impuestos en tiempo real.
- **Diseño Responsivo:** 100% adaptable a cualquier dispositivo móvil o de escritorio.
