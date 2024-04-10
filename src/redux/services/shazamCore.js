import axios from "axios";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const options = {
//   method: 'GET',
//   url: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
//   headers: {
//     'X-RapidAPI-Key': '011cf575e7msh5c25050b671e57dp16acf5jsnfdb8c823c931',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers)=>{
             headers.set('X-RapidApi-Key', '011cf575e7msh5c25050b671e57dp16acf5jsnfdb8c823c931')

             return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: ()=>'/charts/world'}),
    })
})

export const {
    useGetTopChartsQuery
} = shazamCoreApi