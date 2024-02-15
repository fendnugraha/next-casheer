import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" className="bg-slate-200">
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black">
            Co.Cash<span className="text-orange-500">ee</span>r
          </h1>
          <h2>Smart Cashier Application</h2>
        </div>
      </section>
    </>
  );
}
