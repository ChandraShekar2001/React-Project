import React, { useRef } from "react";
import classes from "../styles/Login.module.css";
import Navbar from "../Navbar/Navbar";
import { useAlert} from 'react-alert'


const Login = () => {
  const alert = useAlert()
  const emailRef = useRef();
  const pwdRef = useRef();

  const onSubmitHandler = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = pwdRef.current.value;

    if (!email || !password) {
      return alert.error("Please fill all the required fields!")
    }

  }

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
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={pwdRef}
                className={classes.input}
              />
            </div>
            <button className={classes.Btn}>Submit</button>
            <button className={classes.Btn}>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
