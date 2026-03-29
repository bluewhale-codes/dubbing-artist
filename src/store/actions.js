import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    const link = "http://localhost:3000/api/createUser"

    const config = {
      headers: { "Content-Type": "application/json" }
    }

    const response = await axios.post(link, userData, config)
    return response.data
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