import './App.css';
import Navbar  from './components/Navbar/Navbar';
import Login from './components/Auth/Login';
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [user, setUser] = useState('');
  const onLoginHandler = (userStatus, user) => {
    if (userStatus) {
      setIsLoggedIn(true);
      setUser(user);
    }
  }

  return (
    <div >
      {isLoggedIn && <Navbar user={ user} />}
      {!isLoggedIn && <Login onLogin = {onLoginHandler} />}
    </div>
  );
}

export default App;
