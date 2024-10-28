import ProductsPage from "pages/ProductsPage";
import { useState } from "react";
import Header from "../modules/Header";
const Home = () => {
    const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <Header setSearchVal={setSearchVal} searchVal={searchVal} />
      <ProductsPage searchVal={searchVal} />
    </>
  );
};

export default Home;
