import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Cart = () => {
  let {info, setInfo}=useContext(Context)
  let navigate=useNavigate()
  let [flag,setFlag]=useState(false)
  let [products,setProducts]=useState([])

  useEffect(()=>{
    if(info.isLogin){
      axios.get(`http://localhost:5000/getcart/${info._id}`).then((res) => {
        if (res.data !== null) {
          setProducts(res.data.items)
          console.log(res.data.items)
          setInfo({ ...info, "cartCount": res.data.items.length, "cartItems": res.data.cartItems })
        }
      })
    }
  },[flag])

  let handleInc=(prodId)=>{
    console.log('inc')
    axios.put("http://localhost:5000/cart/inc",{_id:info._id,productId:prodId}).then((res)=>{
      setFlag(!flag)
      console.log(res.data)
    })
  }

  let handleDec=(prodId)=>{
    axios.put("http://localhost:5000/cart/dec", { _id: info._id, productId: prodId }).then((res) => {
      setFlag(!flag)
    })
  }

  let handleRemove=(prodId)=>{
    axios.post("http://localhost:5000/cart/removeproduct",{ _id: info._id, productId: prodId }).then(()=>{
      setFlag(!flag)
    })
  }
  return (
    <div className='cartComp'>
    {!info.isLogin && <div className='loginPlease'>
        <h1>Please login to visit Cart</h1>
        <button className='regLog' onClick={()=>navigate('/login')}>Login</button>
      </div>}
    {
      info.isLogin && <div className='cartCon'>
      {
            products.length > 0 ? <>
              <div className='cartItems'>
                {
                  products.map((obj) => {
                    return <div className='card'>
                      <div className='cardleft'>
                        <div className='imgDiv'>
                          <img src={`http://localhost:5000/images/${obj.image}`} alt='' />
                        </div>
                        <div className='quantity'>
                          <button onClick={() => handleDec(obj.productId)} disabled={obj.quantity === 1 ? true : false}><i class="fa-solid fa-minus"></i></button>
                          <p>{`${obj.quantity}`}</p>
                          <button onClick={() => handleInc(obj.productId)}><i class="fa-solid fa-plus"></i></button>
                        </div>
                      </div>
                      <div className='cardright'>
                        <div className='title'>{obj.title}</div>
                        <div className='price'>&#8377;{obj.price}</div>
                        <button onClick={() => handleRemove(obj.productId)}>Remove</button>
                      </div>
                    </div>
                  })
                }
              </div>
              <div className='carttotal'>
                <h2>PRICE DETAILS</h2>
                <p>total price 123546</p>
              </div>
            </> : <div>Your cart was empty</div>
      }
      </div>
    }
      </div>
  )
}

export default Cart