import { combineReducers } from "@reduxjs/toolkit";

import weatherReducer from "./weather/weatherSlice";

export const rootReducer = combineReducers({ weather: weatherReducer });
