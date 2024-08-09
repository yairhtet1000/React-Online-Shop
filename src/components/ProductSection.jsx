import products from "../data/products";
import Container from "./Container";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <section>
      <Container>
        <h2 className=" text-sm font-semibold text-gray-500">
          Available Products
        </h2>
        <div className=" my-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
