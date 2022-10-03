import React, {useRef, useState} from 'react'


const Login = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = async (e) => {
        
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const response = await fetch('http://localhost:4000/api/v1/login', {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json();
        if (data.success) {
            setIsLoggedIn(true);
            props.onLogin(isLoggedIn, data.user)
        }
        console.log(data);
    }
  return (
      <form onSubmit={submitHandler}>
          <label>Username</label>
          <input type="email" ref={ emailRef} />  
          <label>Password</label>
          <input type="password" ref={passwordRef} />
          <button>Submit</button>
    </form>
  )
}

export default Login