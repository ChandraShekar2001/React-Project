import { UserActions } from "../index";
import {ProfileActions } from "../index"
import {forgotPasswordActions } from "../index"

export const login = (email, password) => async (dispatch) => {
  const sendRequest = async () => {
    let url = "http://localhost:4000/api/v1/login";
    const response = await fetch(url, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    return data;
  };

  const data = await sendRequest();
  if (data.success) {
    localStorage.setItem("token", data.token);
    localStorage.setItem('role', data.user.role);
    localStorage.setItem('name', data.user.name);
    localStorage.setItem('email', data.user.email);
    localStorage.setItem('createdAt', data.user.createdAt);
  }

  dispatch(UserActions.setUser(data));
};

export const register = (userData) => async (dispatch) => {
  const sendRegisterRequest = async () => {
    let url = "http://localhost:4000/api/v1/register";
    const response = await fetch(url, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    });
    const data = await response.json();
    return data;
  };
  const data = await sendRegisterRequest();
  dispatch(UserActions.setUser(data));
};

export const loadUser = () => async (dispatch) => {
  const sendRequest = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:4000/api/v1/me", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token,
        }
    });
    const data = await response.json();
    return data;
  };
  const data = await sendRequest();
  dispatch(UserActions.setUser(data));
};

export const clearErrors = () => async (dispatch) => {
  dispatch(UserActions.clearError());
};

export const logout = () => async (dispatch) => {
  const sendRequest = async() => {
    const url = 'http://localhost:4000/api/v1/logout'
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  const data = await sendRequest();
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  localStorage.removeItem('name')
  localStorage.removeItem('email')
  localStorage.removeItem('createdAt')
  dispatch(UserActions.logOutUser(data))
}

export const updateProfile = (name, email) => async (dispatch) => {
  const token = localStorage.getItem('token')
  const sendUpdateRequest = async () => {
    let url = "http://localhost:4000/api/v1/me/update";
    const response = await fetch(url, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify({
        name,
        email
      }),
    });
    const data = await response.json();
    return data;
  };
  const data = await sendUpdateRequest();
  dispatch(UserActions.setUser(data));
};


export const updatePassword = (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
  const token = localStorage.getItem('token')
  const sendUpdateRequest = async () => {
    let url = "http://localhost:4000/api/v1/password/update";
    const response = await fetch(url, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
        confirmPassword
      }),
    });
    const data = await response.json();
    return data;
  };
  
  const data = await sendUpdateRequest();
  console.log(data);
  if (data.success)
    dispatch(ProfileActions.updatePasswordSuccess());
  else dispatch(ProfileActions.updatePasswordFailed(data));
};


export const forgotPassword = (email) => async (dispatch) => {
  const token = localStorage.getItem('token')
  const sendUpdateRequest = async () => {
    let url = "http://localhost:4000/api/v1/password/forgot";
    const response = await fetch(url, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify({
        email
      }),
    });
    const data = await response.json();
    return data;
  };
  
  const data = await sendUpdateRequest();
  console.log(data);
  if (data.success)
    dispatch(forgotPasswordActions.forgotPasswordSuccess(data));
  else dispatch(forgotPasswordActions.forgotPasswordFail(data.message));
};

export const resetPassword = (token, passwords) => async (dispatch) => {
  const sendUpdateRequest = async () => {
    let url = `http://localhost:4000/api/v1/password/reset/${token}`;
    const response = await fetch(url, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: passwords.password,
        confirmPassword: passwords.confirmPassword
      }),
    });
    const data = await response.json();
    return data;
  };
  
  const data = await sendUpdateRequest();
  console.log(data);
  if (data.success)
    dispatch(forgotPasswordActions.forgotPasswordSuccess(data));
  else dispatch(forgotPasswordActions.forgotPasswordFail(data.message));
};




