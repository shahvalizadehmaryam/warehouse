import { useProducts } from "services/queries";
import styles from "./Products.module.css";
const Products = () => {
  const { data, isPending } = useProducts();
  if (isPending) return <h3>Loading...</h3>;
  if (!data || !data.data.data) {
    return <h3>رکوردی جهت نمایش یافت نشد.</h3>;
  }
  console.log("data", { data, isPending });
  return (
    <table className={styles.products}>
      <thead>
        <tr>
          <th>نام کالا</th>
          <th>موجودی</th>
          <th>قیمت</th>
          <th>شناسه کالا</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data?.data.data.map((productItem) => (
          <tr key={productItem.id}>
            <td>{productItem.name}</td>
            <td>{productItem.quantity}</td>
            <td>{productItem.price} هزار تومان</td>
            <td>{productItem.id}</td>
            <td>
              <div className={styles.actions}>
                <img src="edit.svg" alt="edit" />
                <img src="trash.svg" alt="delete" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
