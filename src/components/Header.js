import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from '../utils/appSlice';
import { useState , useEffect } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants.js';
import { cacheResults } from '../utils/searchSlice.js';
import { ToggleTheme } from './ToggleTheme.js';
import { Link } from 'react-router-dom';

const Header = () => {
  
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }

  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const [searchQuery,setSearchQuery]=useState("");
  const searchCache=useSelector((store)=>store.search);


  const dispatch=useDispatch();
  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }
    },200);
    return () => {
      clearTimeout(timer); 
    }
    
  },[searchQuery]);
  
  const getSearchSuggestions = async() => {
    console.log("api call:"+searchQuery)
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));

  }


  return(
    <div className=' m-2 ml-3 flex justify-between max-w-100% align-middle '>

      <div className='flex justify-center max-w-24 my-auto'>
       
        <button className="btn btn-ghost text-xl" >
          <span className="font-bold text-3xl">Binge</span>
        </button>
      </div>

      <div className="flex m-2 w-1/2">
        <input 
            value={searchQuery} 
            onChange={(e)=>setSearchQuery(e.target.value)}  
            className=" w-11/12 py-2 px-5 rounded-l-full border " 
            placeholder="  Search"
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
         />
        <button className="w-20 cursor-pointer mt-0 bg-gray-100 rounded-r-full border-r-18">
          <img alt="search" className="h-12 mix-blend-darken" src="https://tse3.mm.bing.net/th?id=OIP._uh9AdUgcvBYnE3mhSFf2wHaFj&pid=Api&P=0&h=180" /> 
        </button>
        {showSuggestions &&
        
        (<div className='absolute  py-2 mt-12 ml-1  w-[43%] bg-white rounded-lg border border-white shadow-lg'>
            <ul>
              {suggestions.map((s)=> 
              <li key={s} className="py-2 px-2  rounded-lg hover:bg-gray-100 w-full shadow-sm" 
              > 
              🔍{s} 
               
              </li>)
              }
              
            </ul>  
        </div>)
        }
        
      </div>
      
       
          <ToggleTheme className='my-auto'/>
        
        
        <div className="dropdown dropdown-end my-auto">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <button className="justify-between">
                Profile
                <span className="badge">New</span>
              </button>
            </li>
            <li>
              <button>Settings</button>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
    
      
    </div>
  )
}

export default Header