"use client";
import { EyeIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
export default function Products({ addToCart = [], setAddToCart }) {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const isAlreadyAdded = addToCart.find((p) => p.id === product.id);

    if (isAlreadyAdded) {
      const updatedCart = addToCart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setAddToCart(updatedCart);
    } else {
      setAddToCart([...addToCart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setAddToCart(addToCart.filter((p) => p.id !== product.id));
  };

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_PRODUCT_API_URL + "/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card p-4 hover:translate-y-4 transition duration-300 ease-in-out"
          style={{ backgroundImage: `url(${product.image})` }}>
          <div className="w-full h-full flex items-center justify-between flex-col">
            <div className="flex gap-2 w-full">
              <button
                className="text-white p-2 bg-slate-500 bg-opacity-50 backdrop-blur-sm hover:bg-slate-800"
                onClick={() => handleAddToCart(product)}>
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
              <button className="text-white p-2 bg-slate-500 bg-opacity-50 backdrop-blur-sm hover:bg-slate-800">
                <EyeIcon className="h-6 w-6" />
              </button>
            </div>
            <div>
              <div className="text-white p-4 bg-slate-500 bg-opacity-50 backdrop-blur-sm hover:bg-slate-800">
                <h1 className="text-xl font-bold">{product.title}</h1>
                <h2 className="text-sm">Rp{product.price}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
