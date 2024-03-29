import classes from "./navBar.module.css";
import Image from "../UI/Image";
import images2 from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUserCircle,
  FaHouseUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserActions } from "../../store/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const [navBarActive, setNavBarActive] = useState(false); //state luu navbar active khi scroll
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showMobiMenu, setShowMobiMenu] = useState(false);

  const data = useSelector((state) => state.user.userInfor); // kiem tra xem co user hay khong
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
    //logout
    dispatch(UserActions.logout()); //gui dispatch logout trong store
    toast.success("Log out completed !");
    navigate("/");
  };

  const goHomePage = () => {
    navigate("/");
  };

  window.addEventListener("scroll", changeNavBar); //bat su kien scroll Y

  const showMobi = () => {
    setShowMobiMenu(!showMobiMenu);
  };

  return (
    <div
      className={
        navBarActive
          ? classes.navBar
          : `${classes.navBar} ${classes.NavBarActive}`
      }
    >
      <div className={classes.navLogo}>
        <Image
          src={images2}
          className={classes.navImg}
          onClick={goHomePage}
        ></Image>
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
              to="/trending"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
            >
              Trending
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
        {data.idToken && ( //co IdToken(da dang nhap) thi hien thi myCollection
          <NavLink
            to="/mycollection"
            className={({ isActive }) =>
              isActive ? `${classes.active}` : undefined
            }
          >
            <FaHouseUser />
          </NavLink>
        )}
        {/* hien thi nut logout khi co user */}
        {data.idToken && <FaSignOutAlt onClick={logOutHandler} />}
        {/* chua dang nhap, hien thi nut login  */}
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
          autoClose={1200}
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

      {/* MOBI version */}
      <div className={classes.mobi}>
        <GiHamburgerMenu onClick={showMobi}></GiHamburgerMenu>
      </div>
      {showMobiMenu && (
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
              onClick={() => {
                setShowMobiMenu(false);
              }}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : undefined
              }
              onClick={() => {
                setShowMobiMenu(false);
              }}
            >
              <FaSearch> </FaSearch> Search
            </NavLink>
          </li>
          {/* hien thi nut logout khi co user */}
          {data.idToken && <FaSignOutAlt onClick={logOutHandler} />}
          {/* chua dang nhap, hien thi nut login  */}
          <li>
            {!data.idToken && (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : undefined
                }
                onClick={() => {
                  setShowMobiMenu(false);
                }}
              >
                <FaUserCircle> </FaUserCircle> Login
              </NavLink>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
