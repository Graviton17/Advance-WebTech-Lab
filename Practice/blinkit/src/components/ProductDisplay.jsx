import Data from "../product";
import { useState } from "react";

function ProductDisplay() {
  const [products] = useState(Data);
  const [cartProducts, setCartProducts] = useState([]);

  const handleCart = (product) => {
    setCartProducts([...cartProducts, { ...product, count: 1 }]);
  };

  const presentInCart = (id) => {
    return cartProducts.find((product) => product.id === id);
  };

  const handleDecrement = (id) => {
    const updatedCart = cartProducts
      .map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count - 1 };
        }

        return product;
      })
      .filter((product) => product.count > 0);

    setCartProducts(updatedCart);
  };

  const handleIncrement = (id) => {
    const updatedCart = cartProducts.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      }

      return product;
    });

    setCartProducts(updatedCart);
  };

  const productCount = (id) => {
    const product = cartProducts.find((product) => product.id === id);
    return product ? product.count : 0;
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.image} alt="Image" />
            <div>Estimated Time: {product.time}</div>
            <div>Title: {product.title}</div>
            <div>Quantity: {product.weight}</div>
            <div>Price: {product.price}</div>
          </div>

          <div>
            {presentInCart(product.id) ? (
              <div>
                <button onClick={() => handleDecrement(product.id)}>-</button>
                <div>{productCount(product.id)}</div>
                <button onClick={() => handleIncrement(product.id)}>+</button>
              </div>
            ) : (
              <button onClick={() => handleCart(product)}>Add to Cart</button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductDisplay;
