import classes from "./registerForm.module.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className={classes.register}>
      {/* <img src={img}></img> */}
      <form className={classes.form}>
        <h1>Sign up</h1>
        <input placeholder="Full Name" type="text"></input>
        <input placeholder="Email" type="email"></input>
        <input placeholder="Password" type="password"></input>
        <input placeholder="Phone" type="text"></input>
        <button>SIGN UP</button>
        {/* Chuyen qua trang Login  */}
        <h3>
          Login ? <Link to="/login"> Click here</Link>
        </h3>
      </form>
    </div>
  );
};

export default RegisterForm;
