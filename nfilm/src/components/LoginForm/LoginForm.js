import Image from "../UI/Image";
import classes from "./loginForm.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className={classes.login}>
      <Image src={logo} />
      <form className={classes.form}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>SIGN IN</button>
        {/* Goi y chua co tai khoan thi chuyen den trang dang ky  */}
        <h3>
          Create an account ? <Link to="/register"> Sign up</Link>
        </h3>
      </form>
    </div>
  );
};

export default LoginForm;
