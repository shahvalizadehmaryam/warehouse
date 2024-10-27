import { useProducts } from "services/queries";
import styles from "./Products.module.css";
import { useDeleteProducts } from "services/mutations";
import { useQueryClient } from "@tanstack/react-query";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const queryClient = useQueryClient();
  const { data, isPending } = useProducts();
  const { mutate } = useDeleteProducts();
  if (isPending) return <h3>Loading...</h3>;
  if (!data || !data.data.data) {
    return <h3>رکوردی جهت نمایش یافت نشد.</h3>;
  }
  console.log("data", { data, isPending });
  // Open modal and set the product ID to delete
  const showDeleteModal = (productId) => {
    setProductIdToDelete(productId);
    setIsModalOpen(true);
  };
    // Close modal without deleting
    const closeModal = () => {
      setIsModalOpen(false);
      setProductIdToDelete(null);
    };

  const confirmDeleteHandler = () => {
    console.log("id",productIdToDelete)
    mutate(productIdToDelete, {
      onSuccess: (data) => {
        console.log("data in onsuccess", data);
        queryClient.invalidateQueries({ queryKey: ["products"] });
        setIsModalOpen(false);
      },
      onError: (error) =>
        console.log("error in onError", error.response.data.message),
    });
  };
  return (
    <>
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
                  <button onClick={() => showDeleteModal(productItem.id)}>
                    <img src="trash.svg" alt="delete" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDeleteHandler}
      />
    </>
  );
};

export default Products;
