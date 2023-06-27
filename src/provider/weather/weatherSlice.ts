import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeatherData } from "./weatherApi";

import { IWeather } from "@/interfaces/weather.interface";
import { TypeStatus } from "@/types/status.type";

interface IInitialState {
  data: IWeather | null;
  status: TypeStatus;
}

const initialState: IInitialState = {
  data: null,
  status: "idle",
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location: string) => {
    const data: IWeather = await fetchWeatherData(location);
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<IWeather>) => {
          state.data = action.payload;
          state.status = "succeeded";
        }
      )
      .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Selects

interface ISelect<T> {
  (state: { weather: IInitialState }): T;
}

export const selectWeatherData: ISelect<IInitialState["data"]> = (state) =>
  state.weather.data;

export const selectWeatherStatus: ISelect<IInitialState["status"]> = (state) =>
  state.weather.status;

// Reducer
export default weatherSlice.reducer;
