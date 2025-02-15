import React, { useState } from 'react'
import axios from "axios"

const AddProducts = () => {
  let [obj,setObj]=useState({
    "title":"",
    "brand":"",
    "category":"",
    "description":"",
    "price":"",
    "image":""
  })

  let handleChange=(e)=>{
    setObj(p=>({...p,[e.target.name]:e.target.value}))
  }

  let handleClick=()=>{
    const formData=new FormData()
    for (let key in obj){
      formData.append(key,obj[key])
    }
    axios.post("http://localhost:5000/addproduct",formData).then((res)=>{
      alert("Product added")
      setObj({"title": "","brand": "","category": "","description": "","price": "","image": ""})
    })
  }

  let handleFile=(e)=>{
    setObj(p=>({...p,[e.target.name]:e.target.files[0]}))
  }
  return (
    <div className='addproducts'>
      {
        Object.keys(obj)
        .filter((val)=>val !== 'image')
        .map((val)=>{
          return <>
            <label htmlFor={val}>{val.charAt(0).toUpperCase().concat(val.substring(1))}
              <input type='text' onChange={handleChange} id={val} name={val} value={obj[val]} />
            </label><br/>
          </>
        })
      }
      <label htmlFor='image'>Image
        <input type='file' onChange={handleFile} id='image' name='image'/>
      </label> <br/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddProducts