import React from "react";
import { Link } from "react-router-dom";
import ProductPreview from "../components/ProductPreview";
import { dummyProducts } from "../data";

const Home = () => (
  <>
    <section className="hero">
      <h1>Welcome to Cartora</h1>
      <p>The best place to buy your favorite products online</p>
      <Link to="/products" className="btn">Shop Now</Link>
    </section>

    <section className="products" style={{ padding: "2rem" }}>
      {dummyProducts.slice(0, 4).map(p => (
        <ProductPreview key={p._id} product={p} />
      ))}
    </section>
  </>
);

export default Home;