import React from 'react'

import {useSelector} from 'react-redux'
const Sidebar = () => {
  
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  
  
  return (
    
      <div className='fixed h-full p-2 shadow-lg w-1/6 bg-white '  >
          <div className="flex justify-between max-w-24 p-2 h-8">
            <img alt="" className="h-6 mr-4 " src="https://tse4.mm.bing.net/th?id=OIP.GcRlpNTMNf06GOD3l3pILgHaHa&pid=Api&P=0&h=180"/>
            
            <h2 className=' font-bold'>Home</h2>
          </div>
          <div className='flex justify-between max-w-36 p-2  mt-2'>
            <img alt="" className="h-6 " src="https://tse4.mm.bing.net/th?id=OIP.fDwmo1JR2X-RLM_tmhNs5gHaHa&pid=Api&P=0&h=180"/>
            <h2 className='font-bold'>Your Profile</h2>
            
          </div>

              <ul className='m-2 ml-12'>
                  <li className="cursor-pointer"><a>Your Channel</a></li>
                  <li className="cursor-pointer"><a>History</a></li>
                  <li className="cursor-pointer"><a>Watch Later</a></li>
              </ul>
          <div className='flex justify-between max-w-24 p-2 h-8'>
            <img alt="" className="h-6 mr-4" src="https://tse4.mm.bing.net/th?id=OIP.ALQ_AhTcTkO4wes5Yg5AegHaHa&pid=Api&P=0&h=180"/>
          <h2 className='font-bold'>Explore</h2>
          
          </div>
            <ul className='m-2 ml-12'>
              <li className="cursor-pointer"><a>Trending</a></li>
              <li className="cursor-pointer"><a>Music</a></li>
              <li className="cursor-pointer"><a>Gaming</a></li>
            </ul>
          
        </div>
      )
    }


export default  Sidebar