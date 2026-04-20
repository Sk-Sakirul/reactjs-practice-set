import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response);
        const data = response.data;
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

//   if (!products) return <h1>Loading...</h1>;

  return (
    <div>
      <h2>ProductList</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
              <h3>Title - {product.title}</h3>
              <p>Price - {product.price}</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
