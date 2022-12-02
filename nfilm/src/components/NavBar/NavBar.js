import classes from "./navBar.module.css";
import Image from "../UI/Image";
import images2 from "../../assets/logo.png";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUserCircle,
  FaHouseUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserActions } from "../../store/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const [navBarActive, setNavBarActive] = useState(false); //state luu navbar active khi scroll
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.user.userInfor);
  const changeNavBar = () => {
    if (window.scrollY < 100) {
      //khi keo xuong hon 100px
      setNavBarActive(true);
    } else {
      setNavBarActive(false);
    }
  };

  useEffect(() => {
    changeNavBar();
  }, []);

  const logOutHandler = () => {
    dispatch(UserActions.logout());
    toast.success("Log out completed !");
    navigate("/");
  };

  window.addEventListener("scroll", changeNavBar); //bat su kien scroll Y

  return (
    <div
      className={
        navBarActive
          ? classes.navBar
          : `${classes.navBar} ${classes.NavBarActive}`
      }
    >
      <div className={classes.navLogo}>
        <Image src={images2} className={classes.navImg}></Image>
        <ul className={classes.navLink}>
          <li>
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tvshows"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
            >
              TV Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/genres"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
            >
              Genres
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={classes.navAction}>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? `${classes.active}` : undefined
          }
        >
          <FaSearch></FaSearch>
        </NavLink>
        {data.idToken && (
          <NavLink
            to="/mycollection"
            className={({ isActive }) =>
              isActive ? `${classes.active}` : undefined
            }
          >
            <FaHouseUser />
          </NavLink>
        )}
        {data.idToken && <FaSignOutAlt onClick={logOutHandler} />}
        {!data.idToken && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${classes.active}` : undefined
            }
          >
            <FaUserCircle />
          </NavLink>
        )}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default NavBar;
