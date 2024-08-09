import Breadcrumb from "../components/Breadcrumb";
import CartSection from "../components/CartSection";
import Container from "../components/Container";

export default function MyCart() {
  return (
    <Container className=" flex-grow">
      <Breadcrumb currentPageTitle="My Cart" />
      <CartSection />
    </Container>
  );
}
