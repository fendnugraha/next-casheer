import { ShoppingCartIcon } from "@heroicons/react/24/solid";
export default function ShoppingCart({ cart }) {
  return (
    <>
      <div className="cart bg-slate-100 h-full p-2 rounded-lg">
        <h1 className="text-3xl">
          <ShoppingCartIcon className="h-10 w-10 inline" />
          Cart list
        </h1>
        <p className="text-slate-300">Cart is empty</p>
      </div>
    </>
  );
}
