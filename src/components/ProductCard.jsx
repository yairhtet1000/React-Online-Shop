import { Link } from "react-router-dom";
import Rating from "./Rating";
import inCart from "../data/inCart";

export default function ProductCard(prop) {
  const {
    product: { id, image, title, price, rating },
  } = prop;

  return (
    <Link
      to={`product-detail/${id}`}
      className=" p-5 flex flex-col items-start gap-3 border border-black rounded"
    >
      <img src={image} alt="" className=" mx-auto h-52" />
      <p className=" font-semibold line-clamp-2">{title}</p>
      <Rating rating={rating} />
      <div className=" w-full  flex justify-between items-center">
        <p className=" text-lg">${price}</p>
        {inCart.find((cart) => cart.product.id === id) ? (
          <button className=" px-2 py-1 text-sm text-white font-semibold bg-black border-2 border-black rounded">
            Added
          </button>
        ) : (
          <button className=" px-2 py-1 text-sm font-semibold border-2 border-black rounded">
            Add To Cart
          </button>
        )}
      </div>
    </Link>
  );
}
