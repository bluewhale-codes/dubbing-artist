import { createSlice } from "@reduxjs/toolkit";
import { registerAudio , registerPortfolio} from "./actions";

const initialState = {
    loading:false,
    error:null,
    audio:null,
    success:false,
    notification:{
        type:null,
        message:null
    }
}
const profileSlice = createSlice({
    name:"profile",
    initialState,
   
    extraReducers: (builder) => {
    builder
      // Register Audio
      .addCase(registerAudio.pending, (state) => {
        state.loading = true
      })
      .addCase(registerAudio.fulfilled, (state, action) => {
        state.loading = false
        state.audio = action.payload.data
      })
      .addCase(registerAudio.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      //Register Portfolio
      .addCase(registerPortfolio.pending , (state)=>{
        state.loading = true
      })
      .addCase(registerPortfolio.fulfilled , (state,action)=>{
        state.loading = false
        state.audio = action.payload
        state.notification.type = "succuss"
        state.notification.message = "Portfolio work add successfully "

      
      })
      .addCase(registerPortfolio.rejected , (state,action)=>{
        state.loading = false
        state.error = action.payload.message
        state.notification.type = "error"
        state.notification.message = action.payload.message;
      })
  }

})

export const {register}=profileSlice.actions
export default profileSlice.reducer