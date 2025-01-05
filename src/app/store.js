import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../features/movies/moviesApi';

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;