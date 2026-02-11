import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        query:"car",
        activeTab:"Pics",
        results:[],
        loading:false,
        error:null,
    },

    reducers:{
        setQuery(state,action){
            state.query = action.payload;
        },
        setActiveTab(state,action){
            state.activeTab = action.payload;
        },
        setResult(state,action){
            state.results = action.payload;
            state.loading = false;
        },
        setLoading(state){
            state.loading = true;
            state.error = null;
        },
        setError(state,action){
            state.error = action.payload;
            state.loading=false;
        },
        setClear(state){
            state.results = []
        },
    }
})

export const {setActiveTab,setClear,setError,setLoading,setQuery,setResult} = searchSlice.actions;
export default searchSlice.reducer;