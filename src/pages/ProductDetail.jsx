import { useParams } from "react-router-dom";
import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";

export default function ProductDetail() {
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);

  return (
    <Container>
      <Breadcrumb currentPageTitle="Product Detail" />
      <div className=" my-10 md:grid md:grid-cols-2">
        <div className="col-span-1">
          <img src={currentProduct.image} alt="" className=" mx-auto w-5/12 " />
        </div>
        <div className=" col-span-1 flex flex-col items-start  gap-5">
          <h2 className=" text-xl font-bold">{currentProduct.title}</h2>
          <p className=" inline-block px-3 py-1 text-gray-500 bg-gray-200 uppercase">
            {currentProduct.category}
          </p>
          <p>{currentProduct.description}</p>
          <Rating rating={currentProduct.rating} />
          <div className=" w-full flex justify-between items-center">
            <p>Price: {currentProduct.price}</p>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
