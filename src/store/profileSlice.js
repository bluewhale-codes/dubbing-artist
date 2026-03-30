import { createSlice } from "@reduxjs/toolkit";
import { registerAudio } from "./actions";

const initialState = {
    loading:false,
    error:null,
    audio:null,
    success:false,
}
const profileSlice = createSlice({
    name:"profile",
    initialState,
   
    extraReducers: (builder) => {
    builder
      // Register
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
  }

})

export const {register}=profileSlice.actions
export default profileSlice.reducer