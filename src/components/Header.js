import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from '../utils/appSlice';
import { useState , useEffect } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants.js';
import { cacheResults } from '../utils/searchSlice.js';

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
    // console.log("api call:"+searchQuery)
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));

  }


  return(
    <div className=' m-2 flex justify-between max-w-100% '>

      <div className='flex justify-center max-w-24'>
        <img className=" ml-14 h-12"  onClick={()=>toggleMenuHandler()} alt="menu" src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"/>
        <img className=" ml-2 h-12" alt="icon" src="https://www.gstatic.com/youtube/img/icons/mweb/youtube_fill/logo_with_text/v2/24px.svg"/>
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
              🔍 {s} 
              </li>)
              }
              
            </ul>  
        </div>)
        }
        
      </div>
      

      <div className='flex mr-4'>
        <button><img alt="create" className="h-12" src="https://tse2.mm.bing.net/th?id=OIP.geaDSjRIkFo1vA_MfQlRxgHaHa&pid=Api&P=0&h=180"/></button>
        <button><img alt="bell-icon" className="h-8 m-4" src="https://tse1.mm.bing.net/th?id=OIP.uzUNhsBgn4nXN8cg8zB7LQHaHa&pid=Api&P=0&h=180"/></button>
        <button className=''><img alt="profile" className="h-8 mr-2 rounded-full"  src="https://yt3.ggpht.com/yti/ANjgQV_7SW-6riTEHl83NPc2fAIzFLidhWG1hsLWp55QiJ4=s88-c-k-c0x00ffffff-no-rj"/></button>
      </div>
      
    </div>
  )
}

export default Header