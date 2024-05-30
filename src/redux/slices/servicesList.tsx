import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IServicesListReducer } from "../../models/interfaces";

const initialState = {
  loading: false,
  error: '',
  services: [

  ],
} as IServicesListReducer;

export const fetchServices = createAsyncThunk(
  'servicesList/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_SERVICES_URL);

      if (!response.ok) {
        return rejectWithValue('Loading error');
      }

      return await response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
)

//console.log(res.status, res)
        // if (res.status === 500) {
        //   console.log(res);
        // } else {
        //   console.log(res.json())
        // }

export const servicesListSlice = createSlice({
  name: 'servicesList',
  initialState,
  selectors: {
    services: (state) => state.services
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchServices.pending, (state) => {
      state.loading = true;
      state.error = '';
    })
    .addCase(fetchServices.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.services = action.payload;
    })
    .addCase(fetchServices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    })
  }
});

export default servicesListSlice.reducer;
export const { services } = servicesListSlice.selectors;