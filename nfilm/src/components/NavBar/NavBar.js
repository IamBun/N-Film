import classes from "./navBar.module.css";
import Image from "../UI/Image";
import images2 from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBell, FaHouseUser } from "react-icons/fa";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [navBarActive, setNavBarActive] = useState(false); //state luu navbar active khi scroll

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
        <FaBell />
        <FaHouseUser />
      </div>
    </div>
  );
};

export default NavBar;
