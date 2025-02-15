import React, { useContext } from 'react'
import Context from './Context'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let contextObj=useContext(Context)
  console.log(contextObj.info)
  let navigate=useNavigate()
  return (
    <div className='home'>
      <div className='welcome'>
        <h1>Welcome to FlipMart</h1>
        <p>Your one-stop destination for quality products at unbeatable prices! We bring you a seamless shopping  experience with a wide range of categories, from fashion and electronics to home essentials and more</p>
        <button onClick={() => navigate('/products')}>Shop Now</button>
      </div>
    </div>
  )
}

export default Home