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
  async () => {
    return fetch(import.meta.env.VITE_SERVICES_URL)
      .then(res => res.json())
      .catch(e => console.log('---'+e+'---'))
  }
)

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
      state.services = action.payload;console.log(action)
    })
    .addCase(fetchServices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;console.log(action)
    })
  }
});

export default servicesListSlice.reducer;
export const { services } = servicesListSlice.selectors;