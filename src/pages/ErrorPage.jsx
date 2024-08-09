import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className=" w-full h-screen flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <h2 className=" text-5xl font-bold">404 Not Found</h2>
        <Link to={"/"}>Return to Home</Link>
      </div>
    </section>
  );
}
