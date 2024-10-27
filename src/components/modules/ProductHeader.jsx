import { useState } from "react";
import styles from "./ProductHeader.module.css";
import { useAddProduct } from "services/mutations";
import { useQueryClient } from "@tanstack/react-query";
// this part contains header part of table
const ProductHeader = () => {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });
  const queryClient = useQueryClient();
  const { mutate } = useAddProduct();
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // const { name, price, quantity } = form;
    // const formPrice = parseInt(price);
    // const formQuantity = parseInt(quantity);
    mutate(form, {
      onSuccess: (data) => {
        console.log("data in onsuccess", data);
        queryClient.invalidateQueries({ queryKey: ["products"] });
      },
      onError: (error) => console.log(error.response.data.message),
    });
  };
  return (
    <div className={styles.header}>
      {/* <div className={styles.manageProduct}>
        <img src="setting.svg" alt="manageProductIcon" />
        <span>مدیریت کالا</span>
      </div> */}
      {/* <button className={styles.addProductBtn} onClick={addProductHandler}>
        افزودن محصول
      </button> */}
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={form.name}
          placeholder="نام کالا"
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={changeHandler}
          placeholder="تعداد موجودی"
        />
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={changeHandler}
          placeholder="قیمت "
        />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default ProductHeader;
