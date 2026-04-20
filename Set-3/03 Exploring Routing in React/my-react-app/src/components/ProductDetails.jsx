import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();
  // console.log(product);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        let result = await response.json();
        setProduct(result);
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  if(!product) return <h1>Loading...</h1>

  return (
    <div>
        <h2>Product Details</h2>
      <div>
        <img src={product.image} alt={product.title} width={200} height={200} />
        <h3>Title - {product.title}</h3>
        <p>Price - {product.price}</p>
        <p>Description - {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
