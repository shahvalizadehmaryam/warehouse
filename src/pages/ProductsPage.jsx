import { useProducts } from "services/queries";

const ProductsPage = () => {
  const { data, isPending } = useProducts();
  console.log("data", { data, isPending });
  return <h3>ProductsPage</h3>;
};

export default ProductsPage;
