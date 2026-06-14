import { createContext, useState, useEffect } from 'react';
import { plants as defaultPlants } from '../data/plants-fixed';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedProducts = localStorage.getItem('td_products');
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      } else {
        setProducts(defaultPlants);
        localStorage.setItem('td_products', JSON.stringify(defaultPlants));
      }
    } catch (error) {
      console.error("Error loading products from local storage:", error);
      setProducts(defaultPlants);
    } finally {
      setLoading(false);
    }
  }, []);

  const addProduct = (newProduct) => {
    const updated = [...products, { ...newProduct, id: Date.now() }];
    setProducts(updated);
    localStorage.setItem('td_products', JSON.stringify(updated));
  };

  const updateProduct = (id, updatedFields) => {
    const updated = products.map(p => p.id === id ? { ...p, ...updatedFields } : p);
    setProducts(updated);
    localStorage.setItem('td_products', JSON.stringify(updated));
  };

  const deleteProduct = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('td_products', JSON.stringify(updated));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
