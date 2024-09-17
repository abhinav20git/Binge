import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {closeMenu} from "../utils/appSlice.js"
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer.js';
import LiveChat from './LiveChat.js';
const WatchPage = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    });

    const [searchParams]=useSearchParams();
    // console.log(searchParams.get('v'));
    
  return (
    <div className='flex w-full justify-center align-middle'>
    <div>
        <iframe 
        className="p-2 m-2"
        width="840" 
        height="435" 
        src={"https://www.youtube.com/embed/" + searchParams.get('v')}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>

        </iframe>
        <CommentsContainer/>
        
    </div>

    {/* <div className=' border rounded-t-lg h-[464px] w-full'> */}

    <div className='   w-full'>
      <LiveChat/>
    </div>
    </div>
    
  )
}

export default WatchPage;