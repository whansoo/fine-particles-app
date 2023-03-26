import { combineReducers, configureStore } from "@reduxjs/toolkit";
import particleReducer from "./particleSlice";


const rootReducer = combineReducers({
    particles: particleReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;