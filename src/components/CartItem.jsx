export default function CartItem(prop) {
  const { item } = prop;
  return (
    <div className=" p-5 grid grid-cols-6  border border-black rounded">
      <div className=" col-span-1">
        <img src={item.product.image} alt="" className=" h-16" />
      </div>

      <div className=" col-span-3">
        <p>{item.product.title}</p>
        <p className=" text-gray-500">${item.product.price}</p>
      </div>

      <div className=" col-span-1">
        <p>Quantity</p>
        <div className=" flex gap-3 items-center">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <p className=" text-lg">{item.quantity}</p>

          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className=" col-span-1">
        <p className=" text-xl text-end font-bold">${item.cost}</p>
      </div>
    </div>
  );
}
