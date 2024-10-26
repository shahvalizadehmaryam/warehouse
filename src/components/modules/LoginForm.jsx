import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useLogin } from "services/mutations";
import { setCookie } from "utils/cookie";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = () => {
const [form, setForm] = useState({
username: "",
password: "",
});
const { mutate } = useLogin();
const navigate = useNavigate();
const changeHandler = (event) => {
const name = event.target.name;
const value = event.target.value;
setForm((prevForm) => ({ ...prevForm, [name]: value }));
};
const formSubmitHandler = (event) => {
event.preventDefault();

};
return (
<form onSubmit={formSubmitHandler} className={styles.form}>
        <div className={styles.logoPart}>
        <img src="union.svg" alt="logo" />
        <span>فرم ورود</span>
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
    <button type="submit" className={styles.authBtn}>ورود</button>
    <Link to="/register">
    <span className={styles.accountLink}>ایجاد حساب کاربری؟</span>
    </Link>
</form>
);
};

export default LoginForm;
