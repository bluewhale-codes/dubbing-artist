import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, {rejectWithValue}) => {
     try {
        const link = "http://localhost:3000/api/createUser"

        const config = {
          withCredentials:true,
          headers: { "Content-Type": "application/json" }
        }

        const response = await axios.post(link, userData, config)
        return response.data
     } catch (error) {
        return rejectWithValue(
           error.response?.data || "some Thing went wrong"
        )
     }
  }
)

export const loginUser = createAsyncThunk(
    'user/login',
    async(userCredential,{rejectWithValue})=>{
        try {
            const link = "http://localhost:3000/api/login"
            const config = {
                withCredentials:true,
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const res = await axios.post(link,userCredential,config);
            return res.data;
        } catch (error) {
             return rejectWithValue(
                error.response?.data || "some thing went wrong"
              );
        }
    }
)
export const registerAudio = createAsyncThunk(
    'profile/audio',
    async(formdata,{rejectWithValue})=>{
        try {
            const link = "http://localhost:3000/profile/upload-video"
            
            const res = await axios.post(link,formdata,{withCredentials:true});
            return res.data;
        } catch (error) {
             return rejectWithValue(
                error.response?.data || "some thing went wrong"
              );
        }
    }
)

export const registerPortfolio = createAsyncThunk(
     'profile/porfolio',
     async(formdata,{rejectWithValue})=>{
        try {
            const link = "http://localhost:3000/profile/uploadPortfolio-work";
            const res = await axios.post(link,formdata,{withCredentials:true});
            return res.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "some thing went wrong"
            );
        }
     }
)

export const registerUserdetail = createAsyncThunk(
     'profile/detail',
     async(formdata,{rejectWithValue})=>{
        try {
            const link = "http://localhost:3000/profile/createUserProfile";
            const res = await axios.post(link,formdata,{withCredentials:true});
            return res.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "some thing went wrong"
            );
        }
     }
)
export const registerProject = createAsyncThunk(
     'register/project',
     async(formdata,{rejectWithValue})=>{
        try {
            const link = "http://localhost:3000/profile/create-project";
            const res = await axios.post(link,formdata);
            return res.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "some thing went wrong"
            );
        }
     }
)