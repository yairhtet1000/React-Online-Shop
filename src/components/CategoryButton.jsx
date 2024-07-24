export default function CategoryButton(prop) {
  const { categoryName, current } = prop;
  return (
    <button
      className={`${
        current && "bg-black text-white"
      } px-4 py-2 text-nowrap font-semibold border-2 border-black rounded`}
    >
      {categoryName}
    </button>
  );
}
