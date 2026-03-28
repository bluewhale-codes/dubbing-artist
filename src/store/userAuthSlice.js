import { createSlice } from "@reduxjs/toolkit";
import { registerUser,loginUser } from "./actions";
import axios from "axios";

const initialState = {
    loading:false,
    error:null,
    user:null,
    success:false,
}
const userauthslice = createSlice({
    name:"registerInfo",
    initialState,
   
    extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      // logIn
      .addCase(loginUser.pending,(state,action)=>{
        state.loading = true
      })
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.loading = false
        state.user = action.payload
        state.success = true;
      })
      .addCase(loginUser.rejected,(state,action)=>{
        state.loading = false
        state.error = action.error.message
      })
  }

})

export const {register}=userauthslice.actions
export default userauthslice.reducer