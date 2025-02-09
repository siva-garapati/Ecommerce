import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <input type='text' placeholder='Search for products'/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default Search