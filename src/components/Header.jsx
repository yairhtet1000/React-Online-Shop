import { Link } from "react-router-dom";
import Container from "./Container";

export default function Header() {
  return (
    <header className=" py-3">
      <Container>
        <div className=" flex justify-between items-center">
          <Link to={"/"} className=" text-3xl font-bold">
            Online Shop
          </Link>
          <Link
            to={"/my-cart"}
            className=" relative border border-black px-3 py-1 rounded"
          >
            My Cart
            <span className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs bg-red-500 text-white px-3 py-1 rounded-full">
              1
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
}
