import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Context from './Context'

const ProductPage = () => {
    let {id}=useParams()
    let [product,setProduct]=useState({})
    let {info,setInfo}=useContext(Context)
    let navigate=useNavigate()

    useEffect(()=>{
        console.log(id,info)
        axios.get(`http://localhost:5000/product/${id}`).then((res)=>{
            if(res.data.msg===undefined){
                setProduct(res.data)
            }
        })
    },[id])

    let data={_id:info._id,productId:product._id,title:product.title,price:product.price,image:product.image}

    let addToCart=()=>{
        if(info.isLogin){
            axios.post("http://localhost:5000/addtocart", data).then((res) => {
                setInfo({...info,"cartItems":[...info.cartItems,product._id]})
                navigate('/cart')
            })
        }else{
            alert("please login to add a product to cart")
        }
    }

    let goToCart=()=>{
        navigate('/cart')
    }
  return (
    <div className='productContainer'>
        <div className='productCard'>
            <div className='left'>
                <img src={`http://localhost:5000/images/${product.image}`} alt='' />
                {
                    info.cartItems.includes(id) ?<button onClick={goToCart}>Go to Cart</button> : <button onClick={addToCart}>Add to Cart</button>
                }
            </div>
            <div className='right'>
                <h6>{product.title}</h6>
                <p>{product.description}</p>
                <p>{product.category}</p>
                  <p>&#8377;{product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductPage