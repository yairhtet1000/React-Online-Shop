import { Link } from "react-router-dom";

export default function Breadcrumb(prop) {
  const { currentPageTitle } = prop;

  return (
    <div className=" w-full flex gap-3">
      <Link to={"/"} className=" text-gray-500">
        Home
      </Link>
      <span className=" text-gray-500">/</span>
      <p>{currentPageTitle}</p>
    </div>
  );
}
