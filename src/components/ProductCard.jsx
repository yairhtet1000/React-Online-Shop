import Rating from "./Rating";

export default function ProductCard(prop) {
  const {
    product: { image, title, price, rating },
  } = prop;

  return (
    <div className=" p-5 flex flex-col items-start gap-3 border border-black rounded">
      <img src={image} alt="" className=" mx-auto h-52" />
      <p className=" font-semibold line-clamp-2">{title}</p>
      <Rating rating={rating} />
      <div className=" w-full  flex justify-between items-center">
        <p className=" text-lg">${price}</p>
        <button className=" px-2 py1 text-sm border border-black ">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
