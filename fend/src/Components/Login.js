import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Context from './Context'

const Login = () => {
  let [logObj, setlogObj] = useState({"_id": "","password": ""})
  let [msg, setMsg] = useState('')
  let navigate = useNavigate()
  let {info, setInfo}=useContext(Context)

  let handleInput = (e) => {
    setlogObj({ ...logObj, [e.target.name]: e.target.value })
  }

  const handleLogin=()=>{
    console.log(logObj)
    if(Object.values(logObj).every(value => value.trim() !== "")){
      axios.post("http://localhost:5000/login",logObj).then((res)=>{
        if(res.data.token!==undefined){
          setInfo({...info,...res.data,isLogin:true})
          setMsg('Login done')
          navigate('/')
        }else{
          setMsg('Check Email or Password')
        }
        console.log(res.data,info)
      })
    }
  }

  return (
    <div className='login'>
      <div className='loginImage'><img src='login.jpg' alt='' /></div>
      <div className='loginForm'>
        <p>{msg}</p>
      
        <label htmlFor='email'>Email<br />
          <input type='text' name='_id' id='email' value={logObj._id} onChange={handleInput} />
        </label>

        <label htmlFor='password'>Password<br />
          <input type='password' name='password' id='password' value={logObj.password} onChange={handleInput} />
        </label>
        <button onClick={handleLogin} className='regLog'>login</button>
        
        <p style={{fontSize:'1.2rem'}}>Don't have an account? <Link to='/register'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default Login