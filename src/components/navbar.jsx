import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-full p-5 hover:shadow-md transition duration-300 ease-in-out fixed top-0 z-50 bg-white">
        <div className="container flex justify-between items-start mx-auto">
          <h1 className="text-xl font-bold">
            <Link href="/">
              Co.Cash<span className="text-orange-500">ee</span>r
            </Link>
          </h1>
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sales">Sales</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>Contact</li>
          </ul>
          <ul className="flex gap-5">
            <li>
              <UserCircleIcon className="h-6 w-6 text-cyan-400" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
