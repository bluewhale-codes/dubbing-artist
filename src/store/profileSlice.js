import { createSlice } from "@reduxjs/toolkit";
import { registerAudio , registerPortfolio , registerUserdetail,registerProject} from "./actions";

const initialState = {
    loading:false,
    error:null,
    audio:null,
    success:false,
    notification:{
        type:null,
        message:null
    },
    
}
const profileSlice = createSlice({
    name:"profile",
    initialState,

    reducers:{
       resetNotification:(state,action)=>{
             state.notification.type=null
             state.notification.message=null
       },
       
    },
   
    extraReducers: (builder) => {
    builder
      // Register Audio
      .addCase(registerAudio.pending, (state) => {
        state.loading = true
      })
      .addCase(registerAudio.fulfilled, (state, action) => {
        state.loading = false
        state.audio = action.payload.data
        state.notification.type = "success"
        state.notification.message = "Audio uploaded"
      })
      .addCase(registerAudio.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.notification.type = "error"
        state.notification.message = action.payload.message;
      })

      //Register Portfolio
      .addCase(registerPortfolio.pending , (state)=>{
        state.loading = true
      })
      .addCase(registerPortfolio.fulfilled , (state,action)=>{
        state.loading = false
        state.audio = action.payload
        state.notification.type = "success"
        state.notification.message = "Portfolio work add successfully"

      
      })
      .addCase(registerPortfolio.rejected , (state,action)=>{
        state.loading = false
        state.error = action.payload.message
        state.notification.type = "error"
        state.notification.message = action.payload.message;
      })
      //Register Profile Detail
      .addCase(registerUserdetail.pending , (state)=>{
        state.loading = true
      })
      .addCase(registerUserdetail.fulfilled , (state,action)=>{
        state.loading = false
        state.notification.type = "success"
        state.notification.message = "Profile Details Added successfully"

      
      })
      .addCase(registerUserdetail.rejected , (state,action)=>{
        state.loading = false
        state.error = action.payload.message
        state.notification.type = "error"
        state.notification.message = action.payload.message;
      })

      //create project
      .addCase(registerProject.pending , (state)=>{
        state.loading = true
      })
      .addCase(registerProject.fulfilled , (state,action)=>{
        state.loading = false
        state.audio = action.payload
        state.notification.type = "success"
        state.notification.message = "Project Added successfully"

      
      })
      .addCase(registerProject.rejected , (state,action)=>{
        state.loading = false
        state.error = action.payload.message
        state.notification.type = "error"
        state.notification.message = action.payload.message;
      })
  }

})

export const {register,resetNotification}=profileSlice.actions
export default profileSlice.reducer