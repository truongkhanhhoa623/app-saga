import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import authSclice from "features/auth/authSclice";
import counterReducer from 'features/counter/counterSlice';
import dashboardSclice from "features/dashboard/dashboardSclice";
import { history } from "utils";


 const rootReducer = combineReducers({
     router: connectRouter(history),
    counter: counterReducer,
    auth: authSclice,
    dashboard: dashboardSclice
})

export default rootReducer