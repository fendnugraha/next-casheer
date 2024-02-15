"use client";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Products from "@/components/products";
import ShoppingCart from "@/components/shoppingCart";
import { useState } from "react";
export default function Sales() {
  const [addToCart, setAddToCart] = useState([]);
  console.log(addToCart);

  const handleAddToCart = (updatedCart) => {
    setAddToCart(updatedCart);
  };
  return (
    <>
      <div className="container pt-20 mx-auto grid grid-cols-3 gap-2">
        <div className="md:col-span-2 col-span-3">
          <div className="mt-3">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search..."
                className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 pl-10 w-full"
              />
              <div className="absolute left-3 top-2">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
              </div>
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
              <button className="text-xs bg-slate-100 px-3 py-1 rounded-lg">
                Category 1
              </button>
              <button className="text-xs bg-slate-100 px-3 py-1 rounded-lg">
                Category 2
              </button>
              <button className="text-xs bg-slate-100 px-3 py-1 rounded-lg">
                Category 3
              </button>
              <button className="text-xs bg-slate-100 px-3 py-1 rounded-lg">
                Category 4
              </button>
              <button className="text-xs bg-slate-100 px-3 py-1 rounded-lg">
                Category 5
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 overflow-auto h-[70vh] mt-4">
            <Products addToCart={addToCart} setAddToCart={handleAddToCart} />
          </div>
        </div>
        <div className="cart bg-slate-100 h-full p-2 rounded-lg hidden md:block">
          <ShoppingCart cart={addToCart} />
        </div>
        <button className="absolute bottom-5 right-5 bg-slate-100 h-12 w-12 rounded-full md:hidden">
          <ShoppingCartIcon className="h-6 w-6 inline" />
        </button>
      </div>
    </>
  );
}
