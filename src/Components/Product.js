import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButton, showPrice, style } = props;
  return (
    <div className="product" style={style}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {showButton && (
          <div>
            <br />
            <Link
              to={`/Product/${product.id}`}
              href="#"
              className="btn btn-primary"
              target="_blank"
            >
              Details
            </Link>
          </div>
        )}
        {showPrice && (
          <div>
            {/* <p style={{ fontSize: "20px" }}>
              Rating:
              <span style={{ color: "green" }}>{product.rating.rate}</span>
            </p> */}
            <br />
            <p className="card-text">{product.description}</p>
            <p style={{ fontSize: "22px" }}>
              Price: <span style={{ color: "red" }}>{product.price} $</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
