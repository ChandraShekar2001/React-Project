import './App.css';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Products from '../src/pages/Products'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp';

 function App() {



  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route path='/products/:keyword' element={<Products />} />
        
        <Route exact path = '/login' element={<Login />} />
        <Route exact path = '/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
