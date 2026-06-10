import { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === product.id);
      let newCart;
      if (existing) {
        newCart = prevCart.map((p) => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };
  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = prev.filter((p) => p.id !== id);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };
  const updateQuantity = (id, delta) => {
    setCart((prev) => {
      const newCart = prev.map((p) => {
        if (p.id === id) {
          const newQ = Math.max(1, p.quantity + delta);
          return { ...p, quantity: newQ };
        }
        return p;
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };
  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      let newList;
      if (prev.includes(id)) {
        newList = prev.filter((i) => i !== id);
      } else {
        newList = [...prev, id];
      }
      localStorage.setItem('wishlist', JSON.stringify(newList));
      return newList;
    });
  };
  const getCartCount = () => cart.reduce((acc, item) => acc + item.quantity, 0);
  const getCartTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, updateQuantity, toggleWishlist, getCartCount, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
}