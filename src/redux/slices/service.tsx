import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IServiceReducer } from "../../models/interfaces";

const initialState = {
  info: {},
  loading: false,
  error: ''
} as IServiceReducer;

export const fetchService = createAsyncThunk(
  'service/fetchService',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_SERVICES_URL + '/' + id);

      if (!response.ok) {
        return rejectWithValue('Loading error');
      }

      return response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  selectors: {
    serviceInfo: (state) => state.info
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchService.pending, (state) => {
      state.loading = true;
      state.error = '';
    })
    .addCase(fetchService.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.info = action.payload;
    })
    .addCase(fetchService.rejected, (state, action) => {
      state.error = action.payload as string;
      state.loading = false;
    })
  }
})

export default serviceSlice.reducer;
export const { serviceInfo } = serviceSlice.selectors;