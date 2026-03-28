import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./userAuthSlice"
const store = configureStore({
     reducer:{userAuthReducer}
});

export default store