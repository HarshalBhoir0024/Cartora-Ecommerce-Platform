import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { dummyProducts } from "../data";

const Products = ({ addToCart }) => {
  const location = useLocation();
  const selected = location.state?.selectedProduct;

  const list = selected ? [selected, ...dummyProducts.filter(p => p._id !== selected._id)] : dummyProducts;

  return (
    <div className="products">
      {list.map(p => (
        <ProductCard key={p._id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;