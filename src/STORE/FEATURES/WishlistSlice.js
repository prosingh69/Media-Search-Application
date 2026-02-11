import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("myWishlist");
        if (serialisedState === null) return []; 
        return JSON.parse(serialisedState);
    } catch (e) {
        console.log(e);
        return [];
    }
};
const WishSlice = createSlice({
    name:"like",
    initialState : {
        likeResult :loadFromLocalStorage(),
    },
    reducers :{
        setWishlist(state,action){
            const index = state.likeResult.findIndex((item)=>item.Id === action.payload.Id);
            if(index == -1){
                state.likeResult.push(action.payload);
            }
            else if(index != -1){
                state.likeResult.splice(index,1)
            }
            const dataString = JSON.stringify(state.likeResult);
            localStorage.setItem("myWishlist", dataString);
        },
    }
})

export const {setWishlist} = WishSlice.actions;
export default WishSlice.reducer;