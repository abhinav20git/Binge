
import React from 'react'

const ChatMsg=({name,msg})=>{
    return(
        <div className=" cursor-pointer flex items-center hover:bg-slate-100  w-full p-2 ">
            <img alt="profile" className="h-8 mr-2 rounded-full"  src="https://yt3.ggpht.com/yti/ANjgQV_7SW-6riTEHl83NPc2fAIzFLidhWG1hsLWp55QiJ4=s88-c-k-c0x00ffffff-no-rj"/>
            <div className='px-2 '>
                <span className='font-bold mr-2 '>{name}</span>
                <span>{msg}</span>
            </div>
        </div>

    )
    
}

export default ChatMsg;