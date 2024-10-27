import { useQueryClient } from "@tanstack/react-query";
import { useAddProduct } from "services/mutations";
import styles from "./AddProductModal.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProductModal = ({ isOpen, onClose }) => {
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
    mutate(form, {
      onSuccess: (data) => {
        console.log("data in onsuccess", data);
        queryClient.invalidateQueries({ queryKey: ["products"] });
        onClose();
      },
      onError: (error) => console.log(error.response.data.message),
    });
  };
  if (!isOpen) return null;
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.main} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <h3>ایجاد محصول جدید</h3>
          <form onSubmit={formSubmitHandler} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">نام کالا</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={changeHandler}
                value={form.name}
                placeholder="نام کالا"
              />
            </div>
            <div className={styles.formGroup}>
              <label>تعداد موجودی</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={changeHandler}
                placeholder="تعداد موجودی"
              />
            </div>
            <div className={styles.formGroup}>
              <label>قیمت</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={changeHandler}
                placeholder="قیمت"
              />
            </div>

            <div className={styles.actions}>
              <button
                type="submit"
                className={`${styles.confirmBtn} ${styles.btn}`}
              >
                ایجاد
              </button>
              <button
                className={`${styles.cancel} ${styles.btn}`}
                onClick={onClose}
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
