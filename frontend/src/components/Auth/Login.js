import React, { useRef, useEffect, useState } from "react";
import classes from "../styles/Login.module.css";
import Navbar from "../Navbar/Navbar";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../store/actions/user-actions";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showSignUpHandler = (e) => {
    e.preventDefault();
    props.onSignUpClick();
  };

  const alert = useAlert();
  const emailRef = useRef();
  const pwdRef = useRef();
  const [Email, setEmail] = useState('');
  const [Pwd, setPwd] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = pwdRef.current.value;

    if (!email || !password) {
      return alert.error("Please fill all the required fields!");
    }
    setEmail('')
    setPwd('')
    dispatch(login(email, password)).then(()=>alert.success("Login successful!"));
  };


  const message = useSelector((state) => state.user.message);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  


  useEffect(() => {

    if (message) {
      alert.error(message);
    }
    if (isAuthenticated) {
      
      dispatch(clearErrors());
      navigate("/account");
    }
  }, [alert, message, navigate, isAuthenticated, dispatch]);

  return (
    <>
      <Navbar />

      <div className={classes.complete}>
        <div className={classes["complete-form"]}>
          <h4 style={{ textAlign: "center", marginTop: "10px" }}>LOGIN</h4>
          <form className={classes.loginForm} onSubmit={onSubmitHandler}>
            <div className={classes.formInputs}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                ref={emailRef}
                value={Email}
                onChange={e=>setEmail(e.target.value)}
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={pwdRef}
                value={Pwd}
                onChange={e=>setPwd(e.target.value)}
                className={classes.input}
              />
            </div>
            <button className={classes.Btn}>Submit</button>
            <button className={classes.Btn} onClick={showSignUpHandler}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
