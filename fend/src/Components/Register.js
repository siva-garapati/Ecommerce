import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let [regObj, setRegObj] = useState({
    "_id": "",
    "name": "",
    "phoneNumber": "",
    "gender": "",
    "place": "",
    "password": ""
})
let [msg,setMsg]=useState('')
let navigate=useNavigate()

let handleInput=(e)=>{
  setRegObj({...regObj,[e.target.name]:e.target.value})
}

const handleSubmit=()=>{
  console.log(regObj)
  if (Object.values(regObj).every(value => value.trim() !== "")){
    console.log('axios')
    axios.post("http://localhost:5000/register",regObj).then((res)=>{
      if(res.data.msg==='registration done'){
        navigate('/login')
      }else{
        alert("Email already exists")
      }
      setMsg(res.data.msg)
    })
  }else{
    console.log('axios')
    alert("Please fill all the fields")
  }
}

  return (
    <div className='register'>
      <div className='registerImage'><img src='register.jpg' alt=''/></div>
      <div className='registerForm'>
        <p>{msg}</p>
        <label htmlFor='name'>Name<br />
          <input type='text' name='name' id='name' value={regObj.name} onChange={handleInput} />
        </label>

        <label htmlFor='email'>Email<br />
          <input type='text' name='_id' id='email' value={regObj._id} onChange={handleInput} />
        </label>

        <label htmlFor='phoneNumber'>Phone Number<br />
          <input type='text' name='phoneNumber' id='phoneNumber' value={regObj.phoneNumber} onChange={handleInput} />
        </label>

        <label htmlFor='place'>Place<br />
          <input type='text' name='place' id='place' value={regObj.place} onChange={handleInput} />
        </label>

        <label htmlFor='gender'>Gender</label>
        <select name='gender' onChange={handleInput}>
          <option selected disabled>Select gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>

        <label htmlFor='password'>Password<br />
          <input type='password' name='password' id='password' value={regObj.password} onChange={handleInput} />
        </label>
        <button onClick={handleSubmit} className='regLog'>Register</button>
      </div>
    </div>
  )
}

export default Register