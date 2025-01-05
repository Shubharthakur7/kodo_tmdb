import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: ({ query, page }) => ({
        url: `search/movie`,
        params: { api_key: 'd9556e5db3b3734c670bce3ee18a9a9e', query, page },
      }),
    }),
    fetchDefaultMovies: builder.query({
        query: (page) =>
          `discover/movie?api_key=d9556e5db3b3734c670bce3ee18a9a9e&page=${page}`,
      }),
  }),
});

export const { useFetchMoviesQuery, useFetchDefaultMoviesQuery } = moviesApi;