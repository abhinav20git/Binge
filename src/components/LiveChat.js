import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import {addMessage} from "../utils/chatSlice"
import ChatMsg from "./ChatMsg"
import {generateName} from "../utils/helper.js"	 
import {makeString} from "../utils/helper.js" 
import {LIVE_CHAT_COUNT} from "../utils//constants.js"
const LiveChat = () => {
    const dispatch=useDispatch();
    const chatMessages=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
            console.log("api polling");
            
            dispatch(addMessage({
                name:generateName(),
                msg:makeString(LIVE_CHAT_COUNT),
            }))
        },1000);
        return ()=>clearInterval(i);
    },[]);
    
  return (
    <div className="flex h-[464px] w-full overflow-y-scroll flex-col-reverse ">
      {chatMessages.map((c,i) =>
        <ChatMsg key={i} name={c.name} msg={c.msg}/>
      )}
        
    </div>
  )
}

export default LiveChat;