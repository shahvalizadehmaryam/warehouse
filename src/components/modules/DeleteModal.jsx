import styles from "./DeleteModal.module.css";
const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.main} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <img src="close.svg" alt="close icon" />
          <h3>آیا از حذف این محصول مطمئنید؟</h3>
          <div className={styles.actions}>
            <button
              className={`${styles.confirmBtn} ${styles.btn}`}
              onClick={onConfirm}
            >
              حذف
            </button>
            <button className={`${styles.cancel} ${styles.btn}`} onClick={onClose}>
              لغو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
