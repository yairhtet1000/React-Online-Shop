export default function Header() {
  return (
    <header className=" py-3">
      <div className=" flex justify-between items-center">
        <h2 className=" text-3xl font-bold">Online Shop</h2>
        <button className=" relative border border-black px-3 py-1 rounded">
          My Cart
          <span className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs bg-red-500 text-white px-3 py-1 rounded-full">
            1
          </span>
        </button>
      </div>
    </header>
  );
}
