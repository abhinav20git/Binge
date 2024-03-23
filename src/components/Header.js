import React from 'react'
import { useDispatch } from "react-redux"
import { toggleMenu } from '../utils/appSlice';


const Header = () => {
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='m-2 flex justify-between max-w-100% '>
      <div className='flex justify-center max-w-24'>
        <img className=" ml-14 h-12"  onClick={()=>toggleMenuHandler()} alt="menu" src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"/>
        <img className=" ml-2 h-12" alt="icon" src="https://www.gstatic.com/youtube/img/icons/mweb/youtube_fill/logo_with_text/v2/24px.svg"/>
      </div>
      <div className="flex m-2">
        <input className=" w-96 p-2 rounded-l-full border " placeholder="  Search" />
        <button className="w-20 cursor-pointer mt-0 bg-gray-100 rounded-r-full border-r-18">
          <img alt="search" className="h-12 mix-blend-darken" src="https://tse3.mm.bing.net/th?id=OIP._uh9AdUgcvBYnE3mhSFf2wHaFj&pid=Api&P=0&h=180" /> 
        </button>
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