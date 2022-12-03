import Image from "../UI/Image";
import classes from "./loginForm.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_KEY_NFLIM_FIREBASE } from "../const/CONST";
import { UserActions } from "../../store/UserSlice";

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitSignInHandler = (e) => {
    e.preventDefault();

    const enterEmailValue = emailInputRef.current.value;
    const enterPasswordValue = passwordInputRef.current.value;

    fetch(
      // post thong tin login len CSDL
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY_NFLIM_FIREBASE}`,
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
        // Dua vao message tra ve de thong bao loi
        if (data.error) {
          switch (data.error.message) {
            case "INVALID_EMAIL":
              toast.error("Invalid Email ! Try again !");
              break;
            case "INVALID_PASSWORD":
              toast.error("Invalid Password ! Try again !");
              break;
            case "EMAIL_NOT_FOUND":
              toast.error("Email is not exist ! Try again !");
              break;
            case "MISSING_PASSWORD":
              toast.error("Please enter your password");
              break;
          }
        } else {
          toast.success("Sign in completed !"); // dang nhap thanh cong
          dispatch(UserActions.login(data)); // gui dispatch de luu thong tin dang nhap vao store
          navigate("/");

          emailInputRef.current.value = ""; //reset value
          passwordInputRef.current.value = "";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.login}>
      <Image src={logo} />
      <form className={classes.form} onSubmit={submitSignInHandler}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Email" ref={emailInputRef}></input>
        <input
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        ></input>
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
