import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <ul className={classes["remove-bullets"]}>
            <li>ECOMMERCE</li>
          </ul>
        </div>
        <div className={classes["nav-items"]}>
          <ul className={classes["remove-bullets"]}>
            <input type="text" />
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>welcome { props.user.name}</div>
    </>
  );
};

export default Navbar;
