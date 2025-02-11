import React, { useContext } from 'react'
import Context from './Context'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  let {info}=useContext(Context)
  let navigate=useNavigate()
  return (
    <div className='cartComp'>
    {
      !info.isLogin ? <div className='loginPlease'>
        <h1>Please login to visit Cart</h1>
        <button className='regLog' onClick={()=>navigate('/login')}>Login</button>
      </div> : <div className='cart'>
        Your Cart was Empty
      </div>
    }
    </div>
  )
}

export default Cart