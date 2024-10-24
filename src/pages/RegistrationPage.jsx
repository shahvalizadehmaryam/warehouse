import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "services/mutations";

const RegistrationPage = () => {
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
    const { username, password, confirmPassword } = form;
    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          console.log(data.data.message);
          navigate("/login");
        },
        onError: (error) => console.log(error.response.data.message),
      }
    );
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
