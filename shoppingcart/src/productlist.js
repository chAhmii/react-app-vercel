import { React, useState } from "react";
import ProductItem from "./productitem";
import SearchBar from "./SearchBar";
import ProductDetails from "./ProductDetails";
import SearchList from "./SearchList";
import Cart from "./Cart";
const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [check, setSelectedcheck] = useState(false);
  const [cart, setCart] = useState([]);
  const [search_check, set_search_check] = useState(false);
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedcheck(true);
  };

  const SearchList = () => {
    set_search_check(true);
  };
  console.log("Cart in product list ", searchTerm);
  return (
    <>
      {!check && (
        <SearchBar
          searchTerm={searchTerm}
          onSearch={handleSearch}
          style={{ float: "left" }}
        />
      )}
      {/* {search_check && (
        <SearchList
          searchTerm={searchTerm}
          pr={products}
          handleProductSelect={handleProductSelect}
          setCart={setCart}
          cart={cart}
        />
      )}
      <button type="submit" onClick={SearchList}>
        Search
      </button> */}
      {/* <Cart cart={cart} /> */}
      <div className="product-list">
        {!check &&
          products.map((product) => (
            <ProductItem
              product={product}
              onSelect={handleProductSelect}
              setCart={setCart}
              cart={cart}
            />
          ))}
      </div>
      {check && <ProductDetails product={selectedProduct} />}
    </>
  );
};

export default ProductList;
