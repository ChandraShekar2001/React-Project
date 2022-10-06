import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Products from "../src/pages/Products";
import Auth from "../src/pages/Auth";
import Profile from "../src/pages/Profile";
import UpdateProfile from "../src/pages/UpdateProfile";
import UpdatePassword from "../src/pages/UpdatePassword"


import { loadUser } from "../src/store/actions/user-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route
          exact
          path="/account"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/me/update"
          element={isAuthenticated ? <UpdateProfile /> : <Navigate to="/login" />}
        />
        <Route
        exact
        path="/password/update"
        element={isAuthenticated ? <UpdatePassword /> : <Navigate to="/login" />}
      />

        <Route exact path="/login" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
