import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "Ergonomic Office Chair",
    price: "$299.99",
    color: "Black",
    manufacturer: "OfficePro",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: 2,
    name: "Executive Desk",
    price: "$599.00",
    color: "Walnut",
    manufacturer: "WoodWorks",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: 3,
    name: "Conference Table",
    price: "$1,199.00",
    color: "Oak",
    manufacturer: "BoardRoom Co.",
    image:
      "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: 4,
    name: "Modern Lounge Sofa",
    price: "$899.00",
    color: "Gray",
    manufacturer: "ComfortLine",
    image:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: 5,
    name: "Minimal Bookshelf",
    price: "$249.00",
    color: "White",
    manufacturer: "StudioShelves",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: 6,
    name: "Adjustable Floor Lamp",
    price: "$129.00",
    color: "Matte Black",
    manufacturer: "BrightHome",
    image:
      "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=1200&q=70",
  },
];

function Products() {
  return (
    <div className="page">
      <div className="page__header">
        <h2 className="page__title">Our Products</h2>
        <p className="page__subtitle">Browse our best-selling commercial furniture.</p>
      </div>

      <div className="productsGrid">
        {dummyProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="productLink"
          >
            <ProductCard
              name={product.name}
              image={product.image}
              price={product.price}
              color={product.color}
              manufacturer={product.manufacturer}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
