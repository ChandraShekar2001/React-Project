import React from "react";
import classes from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/products/${keyword}`);
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
          <button className={classes["dropdown-content"]} onClick={e => navigate('/products')}>Products</button>
          <button className={classes["dropdown-content"]}>Dashboard</button>
        </div>

        <div className={classes.search}>
          <form onSubmit={onSubmitHandler}>
            <input
              className={classes["search-header"]}
              type="text"
              placeholder="Search..."
              onChange={(e) => setKeyword(e.target.value)}
            />
          </form>
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
            <Link to ='/login'>
              <FontAwesomeIcon icon={faUser} className={classes.black} />{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
