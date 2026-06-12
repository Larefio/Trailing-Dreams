import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CareGuide from './pages/CareGuide';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/care" element={<CareGuide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </HashRouter>
    </CartProvider>
  );
}
