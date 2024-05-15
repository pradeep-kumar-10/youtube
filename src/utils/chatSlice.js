import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            if(state.messages.splice(12,1));
            state.messages.unshift(action.payload);
        }
    }
});

export const { addMessage} = chatSlice.actions;
export default chatSlice.reducer;
