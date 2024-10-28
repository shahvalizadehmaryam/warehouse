import styles from "./Header.module.css";
// eslint-disable-next-line
const Header = ({ searchVal, setSearchVal }) => {
  const handleInputChange = (event) => {
    setSearchVal(event.target.value);
  };
  return (
    <header className={styles.header}>
      <input
        type="text"
        placeholder="جستجو کالا"
        value={searchVal}
        onChange={handleInputChange}
      />
      <div className={styles.profile}>
        <img src="profile.jpg" alt="avatar" />
        <div>
          <p>میلاد عظمی</p>
          <p>مدیر</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
