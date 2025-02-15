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
import Admin from './adminComps/Admin'
import ProductPage from './Components/ProductPage'

const App = () => {
  let [info,setInfo]=useState({'token':'','isLogin':true,'name':'R','role':'','cartItems':[],'_id':'ram.in'})
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
            <Route path='/product/:id' element={<ProductPage/>}/>
            <Route path='/admin' element={<Admin/>}/>
          </Routes>
        </main>
    </Context.Provider>
    </BrowserRouter>
  )
}

export default App