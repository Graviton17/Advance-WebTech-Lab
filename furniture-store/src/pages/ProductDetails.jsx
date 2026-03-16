import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const FALLBACK_IMAGE_SRC = "https://via.placeholder.com/800x600?text=No+Image";

  // Mock data for a specific product
  const product = {
    id,
    name: "Commercial Office Desk",
    price: "$599.00",
    color: "Oak/Black",
    manufacturer: "WoodWorks",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=75",
    description:
      "A premium commercial office desk built for durability and comfort.",
  };

  return (
    <div className="page">
      <Link to="/products" className="backLink">
        &larr; Back to Products
      </Link>

      <div className="productDetails">
        <div className="productDetails__media">
          <img
            className="productDetails__img"
            src={product.image || FALLBACK_IMAGE_SRC}
            alt={product.name}
            onError={(e) => {
              if (e.currentTarget.src !== FALLBACK_IMAGE_SRC) {
                e.currentTarget.src = FALLBACK_IMAGE_SRC;
              }
            }}
          />
        </div>
        <div>
          <h2>{product.name}</h2>
          <p className="productDetails__price">
            <strong>Price:</strong> {product.price}
          </p>
          <p>
            <strong>Color:</strong> {product.color}
          </p>
          <p>
            <strong>Manufacturer:</strong> {product.manufacturer}
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <button className="primaryButton">Add to Quote</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
