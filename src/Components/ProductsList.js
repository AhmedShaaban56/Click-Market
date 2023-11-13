import React, { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";

function ProductsList() {
  const [Products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products";
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((Data) => setProducts(Data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((Data) => setCategories(Data));
  };
  const getCategoryProducts = (CatName) => {
    fetch(`${api_url}/category/${CatName}`)
      .then((res) => res.json())
      .then((Data) => setProducts(Data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <div>
      <h1
        className="text-center p-5"
        style={{
          fontSize: "50px",
          fontFamily: "sansSerif",
          fontWeight: "900",
          color: "darkgrey",
        }}
      >
        Our Products
      </h1>

      <div className="container">
        <div className=" d-flex justify-content-center ">
          {Categories.map((Cat) => {
            return (
              <button
                key={Cat}
                onClick={() => {
                  getCategoryProducts(Cat);
                }}
                className="btn btn-info mx-2 my-3 p-2  text-white"
                style={{ fontWeight: "bold" }}
              >
                {Cat}
              </button>
            );
          })}
          <button
            style={{ fontWeight: "bold" }}
            className="btn btn-info mx-2 my-3 p-2 text-white bg-success"
            onClick={() => {
              getProducts();
            }}
          >
            All Products
          </button>
        </div>
        <div className="row d-flex justify-content-center">
          {Products.map((product) => {
            return (
              <div className="col-3 card m-1" key={product.id}>
                <Product
                  product={product}
                  showButton={true}
                  showPrice={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
