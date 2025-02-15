import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from './Context'

const Products = () => {
  let [products,setProducts]=useState([])
  let navigate=useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/getproducts').then((res)=>{
      setProducts(res.data)
    })
  }, [])

  let handleClick=(id)=>{
    navigate(`/product/${id}`)
  }
  return (
    <div className='productsCon'>
      <div className='products'>
        {
          products.map((obj)=>{
            return <div className='card' onClick={()=>handleClick(obj._id)}>
              <div className='imgDiv'><img src={`http://localhost:5000/images/${obj.image}`} alt='' /></div>
              <div className='contentDiv'>
                <h6>{obj.title.length>30 ? obj.title.slice(0,30)+"...":obj.title}</h6>
                {/* <p>{obj.description.length > 50 ? obj.description.slice(0, 50) + "..." : obj.description}</p> */}
                <p>{obj.category}</p>
                <p className='price'>&#8377;{`${obj.price}`}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Products