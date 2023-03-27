import React, { useState, useEffect } from "react";
import ProductList from "./productlist";
import "./App.css";
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products/?title=shirt")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  console.log("Products ", products);
  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
};

export default App;
