import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "services/mutations";
import styles from "./RegistrationForm.module.css";
const RegistrationForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { mutate } = useRegister();
  const navigate = useNavigate();
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const { username, password } = form;
    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          navigate("/login");
        },
        onError: (error) => console.log(error.response.data.message),
      }
    );
  };
  return (
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <div className={styles.logoPart}>
          <img src="union.svg" alt="logo" />
          <span>فرم ثبت نام</span>
        </div>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={changeHandler}
          placeholder="نام کاربری"
        />
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={changeHandler}
          placeholder="رمز عبور"
        />
        <input
          type="text"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={changeHandler}
          placeholder="تکرار رمز عبور"
        />
        <button type="submit" className={styles.authBtn}>
          ثبت نام
        </button>
        <Link to="/login">
        <span className={styles.accountLink}>حساب کاربری دارید؟</span>
      </Link>
      </form>
  );
};

export default RegistrationForm;
