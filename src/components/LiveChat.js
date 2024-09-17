import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMsg from "./ChatMsg";
import { generateName } from "../utils/helper.js";
import { makeString } from "../utils/helper.js";
import { RiSendPlaneFill } from "react-icons/ri";
const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMsg, setLiveMsg] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api polling");

      dispatch(
        addMessage({
          name: generateName(),

          msg: makeString(15),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="mt-3 h-[424px]  w-full  overflow-y-scroll flex-col-reverse  mb-2.5 rounded-lg border-none outline-none ">
        {chatMessages.map((c, i) => (
          <ChatMsg key={i} name={c.name} msg={c.msg} />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "abhinav",
              msg: liveMsg,
            })
          );
        }}
        // className="border h-12 w-full  rounded-b-lg align-center "
        className="h-12   rounded-lg "
      >
        <label
        
          className="input input-bordered flex items-center gap-2 w-full"
          
        >
          <input  value={liveMsg} type="text" className="grow" placeholder="Search" onChange={(e) => {
            setLiveMsg(e.target.value);
            // console.log(e.target.value);
          }}/>
          <button className="ml-2 h-6 align-center px-2">
            <RiSendPlaneFill />
          </button>
        </label>
      </form>
    </div>
  );
};

export default LiveChat;
