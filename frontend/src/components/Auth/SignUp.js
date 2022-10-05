import React from "react";
import classes from "../styles/SignUp.module.css";
import Navbar from "../Navbar/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className={classes.complete}>
        <div className={classes["complete-form"]}>
          <h4 style={{ textAlign: "center", marginTop: "10px" }}>SIGN UP</h4>
          <form className={classes.singUpForm}>
            <div className={classes.formInputs}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={classes.input}
              />
            </div>

            <div className={classes.formInputs}>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={classes.input}
              />
            </div>

            <button className={classes.Btn}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
