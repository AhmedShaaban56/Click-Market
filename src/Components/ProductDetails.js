import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const Params = useParams();
  const [Item, setItem] = useState([]);
  useEffect(() => {
    fetch(`${api_url}/${Params.ProductId}`)
      .then((res) => res.json())
      .then((Item) => setItem(Item))
      .catch((error) => console.error("Error fetching data:", error));
  }, [Params.ProductId]);
  return (
    <Product
      product={Item}
      showButton={false}
      showPrice={true}
      style={{
        width: "344px",
        textAlign: "center",
        margin: "auto",
        padding: "20px",
      }}
    />
  );
}

export default ProductDetails;
