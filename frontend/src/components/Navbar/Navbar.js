import React from "react";
import classes from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    navigate("/products");
  };
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link to="/" className={`${classes.links} ${classes["font-poppin"]}`}>
            ECOMMERCE
          </Link>
        </div>

        <div>
          <button
            className={classes["dropdown-content"]}
            onClick={onClickHandler}
          >
            Products
          </button>
        </div>

        <div className={classes.search}>
          <input
            className={classes["search-header"]}
            type="search"
            name="search"
            placeholder="Search..."
          />
        </div>

        <ul className={classes["nav-list"]}>
          <li className={`${classes.item} ${classes["font-poppin"]} `}>
            <Link to="/home" className={`${classes.links}`}>
              Home
            </Link>
          </li>
          <li className={`${classes.item} ${classes["font-poppin"]}`}>
            <Link to="/contact" className={`${classes.links}`} id="contact">
              Contact
            </Link>
          </li>
          <li className={classes.item}>
            <Link>
              <FontAwesomeIcon icon={faCartPlus} className={classes.black} />{" "}
            </Link>
          </li>
          <li className={classes.item}>
            <Link>
              <FontAwesomeIcon icon={faUser} className={classes.black} />{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
