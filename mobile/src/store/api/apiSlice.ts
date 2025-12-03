import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { AuthResponse } from "../../interfaces/auth.interface";
import { ProviderCardResponse } from "../../interfaces/provideCard.interface";
import { ProviderProfileResponse } from "../../interfaces/providerProfile.interface";

// ⚠️ IMPORTANTE: Substitua o endereço de IP pelo endereço IPv4 do seu computador.
const API_URL = 'http://192.168.0.103:3000';

const bQ = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        // Pega o estado global do Redux
        const state = getState() as RootState;
        const token = state.auth.token; // pega o token do authslice

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers;
    }
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: bQ,
    tagTypes: ['Providers', 'User'],
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, any>({
            query: (crendentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: crendentials
            }),
        }),
        register: builder.mutation<AuthResponse, any>({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData
            }),
        }),
        getProviders: builder.query<ProviderCardResponse[], void>({
            query: () => '/providers',
            providesTags: ['Providers']
        }),
        getProviderById: builder.query<ProviderProfileResponse, number>({
            query: (id) => `/providers/${id}`,
            providesTags: (result, error, id) => [{ type: 'Providers', id }]
        }),
    }),

});

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetProvidersQuery,
    useGetProviderByIdQuery
} = apiSlice;