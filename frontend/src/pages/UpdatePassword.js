import React, { useRef, useState, useEffect } from "react";
import classes from "../components/styles/Login.module.css";
import Navbar from "../components/Navbar/Navbar";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../store/actions/user-actions";
import { UserActions } from "../store/index";

const UpdatePassword = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const { isUpdated, updateMessage } = useSelector((state) => state.user);
  console.log(isUpdated, updateMessage);

    
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const oldPassword = oldPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!oldPassword && !newPassword && !confirmPassword) {
      return alert.error("Please enter all fields");
    }
    if (newPassword !== confirmPassword) {
      return alert.error("Password and confirmPassword do not match");
    }

    setoldPassword("");
    setnewPassword("");
    setconfirmPassword("");
    dispatch(updatePassword(oldPassword, newPassword, confirmPassword));


  };

  useEffect(() => {
      if (updateMessage) {
        alert.error(updateMessage);
        dispatch(UserActions.clearError())
      }
      if (isUpdated) {
        alert.success("Password updated successfully");
        dispatch(UserActions.stateReset())
        navigate("/account");
      }
}, [isUpdated, updateMessage, dispatch, alert, navigate]);
    
  return (
    <>
      <Navbar />
      <div className={classes.complete}>
        <div className={classes["complete-form"]}>
          <h4 style={{ textAlign: "center", marginTop: "10px" }}>
            UPDATE PASSWORD
          </h4>
          <form className={classes.loginForm} onSubmit={onSubmitHandler}>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="oldPassword"
                placeholder="Old Password"
                ref={oldPasswordRef}
                value={oldPassword}
                onChange={(e) => setoldPassword(e.target.value)}
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="newPassword"
                placeholder="newPassword"
                ref={newPasswordRef}
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirmPassword"
                ref={confirmPasswordRef}
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                className={classes.input}
              />
            </div>
            <button className={classes.Btn}>Update Password</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
