import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import classes from "../components/styles/Profile.module.css";
import NavBar from "../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const navigate = useNavigate();
  const alert = useAlert();

  const { user, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuthenticated) {
      alert.error("Login to access this resource");
      navigate("/login");
    }
  }, [navigate, alert, isAuthenticated]);

  return (
    <>
      <NavBar />
      <div className={classes.completeDiv}>
        <div className={classes.imageBox}>
          <img src="/images/carousel-3.jpg" alt="Profile Pic"></img>
          <Link to = '/me/update' className={classes.linkImage} style = {{textAlign:"center"}}>Edit Profile <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
        </div>
        <div className={classes.infoBox}>
          <h1>My Profile</h1>
          <div>
            <h4>Full Name</h4>
            <p>{user.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4>Joined on</h4>
            <p>{String(user.createdAt).substring(0, 10)}</p>
          </div>

          <div className={classes.lastDiv}>
            <Link to="/orders" className={classes.link}>
              My Orders <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
            <Link to="/password/update" className={classes.link}>
              Change Password{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
