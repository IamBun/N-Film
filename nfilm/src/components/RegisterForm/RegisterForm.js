import classes from "./registerForm.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_KEY_NFLIM_FIREBASE } from "../const/CONST";

const RegisterForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const submitRegisterHandler = (e) => {
    e.preventDefault();

    const enterEmailValue = emailInputRef.current.value;
    const enterPasswordValue = passwordInputRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY_NFLIM_FIREBASE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enterEmailValue,
          password: enterPasswordValue,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          console.log(data.error.message);
          switch (data.error.message) {
            case "INVALID_EMAIL":
              toast.error("Invalid Email ! Try again !");
              break;
            case "MISSING_EMAIL":
              toast.error("Please enter your email");
              break;
            case "EMAIL_EXISTS":
              toast.error("Email existed ! Try again !");
              break;
            case "WEAK_PASSWORD : Password should be at least 6 characters":
              toast.error("Password should be at least 6 characters !");
              break;
            case "MISSING_PASSWORD":
              toast.error("Please enter your password");
              break;
          }
        } else {
          toast.success("Sign up completed !");

          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";
          navigate("/login");
        }
      });
  };

  return (
    <div className={classes.register}>
      {/* <img src={img}></img> */}
      <form className={classes.form} onSubmit={submitRegisterHandler}>
        <h1>Sign up</h1>
        <label>Enter your email </label>
        <input placeholder="Email" type="email" ref={emailInputRef}></input>
        <label>Enter your password </label>

        <input
          placeholder="Password"
          type="password"
          ref={passwordInputRef}
        ></input>
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
