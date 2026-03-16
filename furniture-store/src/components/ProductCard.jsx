import React, { useState } from "react";
import ProductCounterClass from "./ProductCounterClass";
import ProductCounterFunc from "./ProductCounterFunc";
import LikeButton from "./LikeButton";

const FALLBACK_IMAGE_SRC = "https://via.placeholder.com/600x450?text=No+Image";

function ProductCard({ image, price, color, manufacturer, name }) {
  const imgSrc = image || FALLBACK_IMAGE_SRC;
  const [counterMode, setCounterMode] = useState("function");

  return (
    <div className="productCard" aria-label={name}>
      <div className="productCard__media">
        <img
          className="productCard__img"
          src={imgSrc}
          alt={name}
          loading="lazy"
          onError={(e) => {
            if (e.currentTarget.src !== FALLBACK_IMAGE_SRC) {
              e.currentTarget.src = FALLBACK_IMAGE_SRC;
            }
          }}
        />
      </div>

      <div className="productCard__body">
        <h3 className="productCard__title">{name}</h3>

        <div className="productCard__meta">
          <div className="productCard__price">{price}</div>
          <div className="productCard__attrs">
            <span className="productCard__attr">
              <span className="productCard__attrLabel">Color</span>
              <span className="productCard__attrValue">{color}</span>
            </span>
            <span className="productCard__attr">
              <span className="productCard__attrLabel">Manufacturer</span>
              <span className="productCard__attrValue">{manufacturer}</span>
            </span>
          </div>

          <div
            className="productCard__actions"
            onClick={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
          >
            <div className="productCard__actionsHeader">
              <div className="productCard__actionsTitle">Product count</div>
              <div className="segmented" role="group" aria-label="Counter type">
                <button
                  type="button"
                  className={`segmented__btn ${
                    counterMode === "function" ? "segmented__btn--active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCounterMode("function");
                  }}
                >
                  Function
                </button>
                <button
                  type="button"
                  className={`segmented__btn ${
                    counterMode === "class" ? "segmented__btn--active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCounterMode("class");
                  }}
                >
                  Class
                </button>
              </div>
            </div>

            {counterMode === "function" ? (
              <ProductCounterFunc label="Product count" showLabel={false} />
            ) : (
              <ProductCounterClass label="Product count" showLabel={false} />
            )}
            <LikeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.defaultProps = {
  image: FALLBACK_IMAGE_SRC,
  name: "Unnamed Product",
  price: "Price Upon Request",
  color: "Not Specified",
  manufacturer: "Unknown Manufacturer",
};

export default ProductCard;
