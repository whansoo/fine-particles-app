import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
// import { fetchData } from "../api/axios"

const initialState = {
    data: [],
    loading: false,
};
// const getParameters = {
//   serviceKey: '9/Vc243KZHuIFi+JjHzMQjFpodJZohurjl8MM0IdBqgAe/eSJELcQfSopXf50XG6Vv3nkxmyQuhz5tainydZng==',
//   returnType:'json',
//   numOfRows:'100',
//   pageNo:'1',
//   sidoName: '인천',
//   ver:'1.0',
// }
// export const getParticles = createAsyncThunk("particles/getParticles", async (_, {rejectWithValue}) => {
//     try {
//       const response = await axios.get("/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty", {params: getParameters});
//       const json = response.data
//       console.log(json.response.body)
//       return json.response.body
//     } catch (err) {
//       return rejectWithValue(err.response.data)
//     }
//   });
export const getParticles = createAsyncThunk("particles/getParticles", async (name, {rejectWithValue}) => {
  try {
    const response = await axios.get("/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty", {params: 
  {
    serviceKey: '9/Vc243KZHuIFi+JjHzMQjFpodJZohurjl8MM0IdBqgAe/eSJELcQfSopXf50XG6Vv3nkxmyQuhz5tainydZng==',
    returnType:'json',
    numOfRows:'100',
    pageNo:'1',
    sidoName: `${name}`,
    ver:'1.0'
  }
  });
    const json = response.data
    console.log(json.response.body)
    return json.response.body
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
});


  export const particleSlice = createSlice({
    name: "particles",
    initialState,
    reducers: {},
    extraReducers: {
      [getParticles.pending]: (state) => {
        state.loading = true
      },
      [getParticles.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload
      },
      [getParticles.rejected]: (state) => {
        state.loading = false;
      },
      
    },
  });
  
  export default particleSlice.reducer