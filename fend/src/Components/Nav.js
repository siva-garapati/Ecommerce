import React, { useContext } from 'react'
import { Link, NavLink} from 'react-router-dom'
import Search from './Search'
import Context from './Context'

const Nav = () => {
  let {info}=useContext(Context)
  // let navigate=useNavigate()

  // const handleLogout=()=>{
  //   setInfo({'token':'','isLogin':false,'name':'','role':''})
  //   navigate('/home')
  // }
  return (
    <nav>
        <Link to="/">
            <img src='/flipmart.png' alt='FlipMart' title='FlipMart' />
        </Link>

        <Search/>

      <NavLink to="/cart" className="cartIcon">Cart
        {info.cartCount>0 && <span>{info.cartCount}</span>}
      </NavLink>

      {!info.isLogin && <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </>}

      {info.isLogin && <div className='profileIcon'>{info.name.charAt(0).toUpperCase()}
        {/* <div className='prolog'>
          <Link to='/profile'>Profile</Link>
          <div style={{ fontSize: '1.2em', cursor:'pointer'}} onClick={handleLogout}>Logout</div>
        </div> */}
        </div>}
    </nav>
  )
}

export default Nav