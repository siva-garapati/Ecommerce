import React, { useState } from 'react'
import AddProducts from './AddProducts'

const Admin = () => {
    let [comp,setComp]=useState()

    let handleClick=(s)=>{
        if(s==='addproduct'){
            setComp(<AddProducts/>)
        }
    }
  return (
    <div>
        <div>
            <button onClick={()=>handleClick('addproduct')}>add product</button>
        </div>
        <div>
            {comp}
        </div>
    </div>
  )
}

export default Admin