import React, { useContext } from 'react'
import Context from './Context'

const Home = () => {
  let contextObj=useContext(Context)
  console.log(contextObj.info)
  return (
    <div>Home</div>
  )
}

export default Home