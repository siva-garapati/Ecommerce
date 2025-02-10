import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Search from './Components/Search'
import "./App.css"
import Login from './Components/Login'
import Register from './Components/Register'
import Cart from './Components/Cart'
import Profile from './Components/Profile'
import { useState } from 'react'
import Context from './Components/Context'
import Products from './Components/Products'

const App = () => {
  let [info,setInfo]=useState({'token':'','isLogin':false,'name':'','role':''})
  return (
    <BrowserRouter>
      <Context.Provider value={{ setInfo, info }}>
        <Nav />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/products' element={<Products/>}/>
          </Routes>
        </main>
    </Context.Provider>
    </BrowserRouter>
  )
}

export default App