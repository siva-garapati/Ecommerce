import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Context from './Context'

const Nav = () => {
  let {info, setInfo}=useContext(Context)

  const handleLogout=()=>{
    setInfo({'token':'','isLogin':false,'name':'','role':''})
  }
  return (
    <nav>
        <Link to="/">
            <img src='/flipmart.png' alt='FlipMart' title='FlipMart' />
        </Link>

        <Search/>

        <Link to="/cart">Cart</Link>

      {!info.isLogin && <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </>}

      {info.isLogin && <div className='profileIcon'>{info.name.charAt(0).toUpperCase()}
        <div className='prolog'>
          <Link to='/profile'>Profile</Link>
          <div style={{ fontSize: '1.2em', cursor:'pointer'}} onClick={handleLogout}>Logout</div>
        </div>
        </div>}
      {/* {info.isLogin && <Link to='/profile' className='profileIcon'>{info.name.charAt(0)}</Link>} */}
    </nav>
  )
}

export default Nav