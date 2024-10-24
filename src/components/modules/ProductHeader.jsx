import styles from "./ProductHeader.module.css";
// this part contains header part of table
const ProductHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.manageProduct}>
        <img src="setting.svg" alt="manageProductIcon" />
        <span>مدیریت کالا</span>
      </div>
      <button className={styles.addProductBtn}>افزودن محصول</button>
    </div>
  );
};

export default ProductHeader;
