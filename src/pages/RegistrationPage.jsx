import { useState } from "react";

const RegistrationPage = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={formSubmitHandler}>
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
      <button type="submit">register</button>
    </form>
  );
};

export default RegistrationPage;
