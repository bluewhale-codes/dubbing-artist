import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./userAuthSlice"
import profileSlice  from "./profileSlice"
const store = configureStore({
     reducer:{userAuthReducer,profileSlice}
});

export default store