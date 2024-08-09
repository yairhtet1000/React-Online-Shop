import CategoryButton from "./CategoryButton";
import Container from "./Container";

export const CategorySection = () => {
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section id="category-section">
      <Container>
        <p className="text-sm font-semibold text-gray-500">
          Product Categories
        </p>
        <div className=" my-2 space-x-5 flex flex-nowrap overflow-scroll hide-scrollbar">
          <CategoryButton categoryName={"all"} current={true} />
          {categories.map((category) => (
            <CategoryButton
              key={category}
              categoryName={category}
              current={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
