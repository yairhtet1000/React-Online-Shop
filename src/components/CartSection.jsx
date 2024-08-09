import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import inCart from "../data/inCart";

export default function CartSection() {
  return (
    <>
      <div className=" h-full py-5 flex flex-col gap-3">
        {inCart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <div className=" mt-auto py-3 flex flex-col gap-3">
          <div className=" flex justify-end gap-10 border-t border-black">
            <div className=" text-right">
              <p className=" text-gray-500">Total</p>
              <p className=" font-bold">$123</p>
            </div>
            <div className=" text-right">
              <p className=" text-gray-500">Tax (10%)</p>
              <p className=" font-bold">$123</p>
            </div>
            <div className=" text-right">
              <p className=" text-gray-500">Net Total</p>
              <p className=" font-bold">$123</p>
            </div>
          </div>
          <div className=" flex justify-end">
            <Link className=" px-4 py-2 border border-black rounded">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
