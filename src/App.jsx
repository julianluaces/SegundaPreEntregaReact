import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Cart from './components/Cart'


const App = () => {

  return (


    <BrowserRouter>

      <Navbar />

      <ItemListContainer greeting={"Bienvenidos a my Eccomerce!"} />

      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ("Cantidad aregada" , quantity)} />

      <Routes>


        <Route path='./home' element={<Home />} />
        <Route path='./about' element={<About />} />
        <Route path='./cart' element={<Cart />} />
        <Route path='./contactUs' element={<ContactUs />} />
        <Route path='./itemCount' element={<ItemCount />} />


      </Routes>





    </BrowserRouter>

  )

}

export default App






