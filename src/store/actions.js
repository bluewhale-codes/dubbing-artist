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
            const res = await axios.post(link,formdata,{withCredentials:true});
            return res.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "some thing went wrong"
            );
        }
     }
)
// Get all Project here

export const getAllProjects = createAsyncThunk(
     "get/projects",
  async (_, { rejectWithValue }) => {
    try {
      const link = "http://localhost:3000/profile/get-allprojects"; // ✅ your GET endpoint

      const res = await axios.get(link, {
        withCredentials: true,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
)
export const getProjectDetail = createAsyncThunk(
     "get/details",
  async (id, { rejectWithValue }) => {
    try {
      const link = `http://localhost:3000/profile/get-details/${id}`; // ✅ your GET endpoint

      const res = await axios.get(link);

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
)

// get login user
export const getUser = createAsyncThunk(
     "get/User",
  async (_, { rejectWithValue }) => {
    try {
      const link = "http://localhost:3000/api/me"; // ✅ your GET endpoint

      const res = await axios.get(link, {
        withCredentials: true,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
)

export const createProposal = createAsyncThunk(
     'create/proposal',
     async(formdata,{rejectWithValue})=>{
        try {
            const link = "http://localhost:3000/profile/create-proposal";
            const res = await axios.post(link,formdata,{withCredentials:true});
            return res.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "some thing went wrong"
            );
        }
     }
)


export const getProposals = createAsyncThunk(
     "get/proposals",
  async (_, { rejectWithValue }) => {
    try {
      const link = "http://localhost:3000/profile/get-proposal"; // ✅ your GET endpoint

      const res = await axios.get(link,{withCredentials:true});

      return res.data.proposals;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
)
export const acceptProposal = createAsyncThunk(
     'accept/proposal',
     async(id,{rejectWithValue})=>{
        try {
            const link = "http://localhost:3000/profile/accept-proposal";
            const res = await axios.post(link,{"proposal_id":id},{withCredentials:true});
            return res.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "some thing went wrong"
            );
        }
     }
)
