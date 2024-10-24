import { useState } from "react";
import { useLogin } from "services/mutations";
import { setCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
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
    mutate(form, {
      onSuccess: (data) => {
        setCookie("token", data.data?.token);
        navigate("/");
      },
      onError: (error) => console.log(error.response.data.message),
    });
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
      <button type="submit">login</button>
    </form>
  );
};

export default LoginPage;
