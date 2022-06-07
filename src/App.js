import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
