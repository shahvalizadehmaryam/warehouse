import { useProducts } from "services/queries";
import styles from "./Products.module.css";
import { useDeleteProducts } from "services/mutations";
const Products = () => {
  const { data, isPending,refetch } = useProducts();
  const { mutate } = useDeleteProducts();
  if (isPending) return <h3>Loading...</h3>;
  if (!data || !data.data.data) {
    return <h3>رکوردی جهت نمایش یافت نشد.</h3>;
  }
  console.log("data", { data, isPending });

  const deleteHandler = (productId) => {
    console.log("id",productId)
    mutate(productId, {
      onSuccess: (data) => {
        console.log("data in onsuccess", data);
      },
      onError: (error) =>
        console.log("error in onError", error.response.data.message),
    });
  };
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
                <button>
                  <img src="edit.svg" alt="edit" />
                </button>
                <button onClick={() => deleteHandler(productItem.id)}>
                  <img src="trash.svg" alt="delete" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
