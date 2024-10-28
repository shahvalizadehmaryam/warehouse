import styles from "./Products.module.css";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import AddProductModal from "./AddProductModal";
import { useGetAllProducts } from "services/queries";
import Pagination from "./Pagination";
const Products = () => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [page,setPage] = useState(1);

  const { data, isPending, error } = useGetAllProducts(page);

  if (isPending) return <h3>Loading...</h3>;
  if (error) return <p>مشکلی در نمایش دیتای کالا ها به وجود امده است.</p>;
  console.log("data", { data, isPending });
  // Open modal and set the product ID to delete
  const showDeleteModal = (productId) => {
    setProductIdToDelete(productId);
    setIsModalDeleteOpen(true);
  };
  // edit
  const showEditModal = (productId) => {
    setProductIdToDelete(productId);
    setIsModalOpen(true);
  };
  // close edit modal
  const closeModal = () => {
    setIsModalOpen(false);
    setProductIdToDelete(null);
  };
  // Close modal delete without deleting
  const closeDeleteModal = () => {
    setIsModalDeleteOpen(false);
    setProductIdToDelete(null);
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
          {data?.data?.map((productItem) => (
            <tr key={productItem.id}>
              <td>{productItem.name}</td>
              <td>{productItem.quantity}</td>
              <td>{productItem.price} هزار تومان</td>
              <td>{productItem.id}</td>
              <td>
                <div className={styles.actions}>
                  <button onClick={() => showEditModal(productItem.id)}>
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
      <Pagination page={page} setPage={setPage} />
      <DeleteModal
        isOpen={isModalDeleteOpen}
        onClose={closeDeleteModal}
        productId={productIdToDelete}
      />
      <AddProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        productId={productIdToDelete}
      />
    </>
  );
};

export default Products;
