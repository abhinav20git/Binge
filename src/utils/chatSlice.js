import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { LIVE_CHAT_COUNT } from "./constants";
=======

>>>>>>> 26b3721190772dc966ac05d161b45f52094ef58e
const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
<<<<<<< HEAD
            state.messages.splice(LIVE_CHAT_COUNT,1);
            state.messages.unshift(action.payload);
=======
            state.messages.push(action.payload);
>>>>>>> 26b3721190772dc966ac05d161b45f52094ef58e
        },
    },
});
export const { addMessage }=chatSlice.actions;
export default chatSlice.reducer;