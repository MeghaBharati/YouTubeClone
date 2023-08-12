import React from 'react'
import { FaSearch } from 'react-icons/fa';
import  './SearchList.css'
function SearchList({TitleArray,setSearchQuery}) {
  if (!TitleArray) {
    return null; // Or some loading indicator
  }
  return (
    <>
    
    <div className="Container_SearchList">
      {
        TitleArray.map(m=>{
          return        <p 
          key={m}
          onClick={e=>setSearchQuery(m)}
          className='titleItem'>

          <FaSearch/>
          {m}
      </p>
        })
      }
    </div>

    </>
  )
}

export default SearchList