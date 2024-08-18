import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import Navbar1 from './components/Navbar1'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CardPizza from './components/CardPizza'
import Registro from './components/Registro'
import LoginPage from './components/LoginPage'
import Cart from './components/Cart';


function App() {
  
  return <>
  <Navbar1/>
  {/* <Home/>  */}
  <Cart />
  {/*<Registro/>*/}
  {/*<LoginPage />*/}  
  <Footer/>   
    </>
  
}

export default App
