import { configureStore } from '@reduxjs/toolkit';
import servicesList from '../slices/servicesList';

const store = configureStore({
  reducer: {
    servicesList: servicesList
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
