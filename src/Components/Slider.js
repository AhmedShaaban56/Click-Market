import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div className="sliding">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.acacioustech.com/wp-content/uploads/2020/12/ecommerce.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Electronic Devices</h5>
              {/* <p>
                Some representative placeholder content for the first slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://ecommercefastlane.com/wp-content/uploads/2022/11/AdobeStock_241431868-scaled.jpeg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Male and Female Clothes</h5>
              <p>
               Fashionable clothes for men and women
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.maropost.com/wp-content/uploads/2020/09/10-Ecommerce-marketing-trends-for-2020-blog.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Wonderful Collection of Jewelry</h5>
              <p>
                Variety designs of Jewelery
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
