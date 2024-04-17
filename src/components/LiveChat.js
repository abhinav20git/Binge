import React, { useEffect,useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import {addMessage} from "../utils/chatSlice"
import ChatMsg from "./ChatMsg"
import {generateName} from "../utils/helper.js"	 
import {makeString} from "../utils/helper.js" 

const LiveChat = () => {
    
    const dispatch=useDispatch();
    const [liveMsg,setLiveMsg]=useState("");
    const chatMessages=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
            console.log("api polling");
            
            dispatch(addMessage({
                name:generateName(),
                msg:makeString(15),
            }))
        },7000);
        return ()=>clearInterval(i);
    },[]);
    
  return (
  <>
    <div className="flex h-[464px] w-full pl-2 pb-1 overflow-y-scroll flex-col-reverse ">
      {chatMessages.map((c,i) =>
        <ChatMsg key={i} name={c.name} msg={c.msg}/>
      )}
    </div>

    <form onSubmit={(e)=>
              {
                e.preventDefault();
                dispatch(
                  addMessage({
                    name:"abhinav",
                    msg:liveMsg,
                  })
                  
                )
              }} className="border h-12 w-full p-2 rounded-b-lg align-center ">
      <input 
      type="text" 
      value={liveMsg}
      onChange={(e)=>{
        setLiveMsg(e.target.value);
        // console.log(e.target.value);
      }} 
      className="ml-2 h-6 w-[80%]  border-none " 
      placeholder="Chat...."/>
      <button className="ml-2 h-6 align-center px-2">  
        <img className=" " src="https://support.content.office.net/en-us/media/0108dfe8-9052-465b-876b-f50465926ef6.png"/> 
      </button>
    </form>
    </>
  )
}

export default LiveChat;