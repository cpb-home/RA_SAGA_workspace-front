import { configureStore } from '@reduxjs/toolkit';
import servicesList from '../slices/servicesList';
import service from '../slices/service';

const store = configureStore({
  reducer: {
    servicesList: servicesList,
    serviceInfo: service
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
