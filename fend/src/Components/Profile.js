import React, { useContext } from 'react'
import Context from './Context'

const Profile = () => {
  let {info}=useContext(Context)
  console.log(info)
  return (
    <div className='profile'>
      {
        info.isLogin && Object.entries(info).map(([key,value])=>{
          return <p>{`${key} :- ${value}`}</p>
        })
      }
    </div>
  )
}

export default Profile