import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
// import { fetchData } from "../api/axios"

const initialState = {
    data: [],
    sidonametag: [],
    wish: [],
    loading: false,
};

export const getParticles = createAsyncThunk("particles/getParticles", async (sidoname, {rejectWithValue}) => {
  try {
    const response = await axios.get("/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty", {params: 
  {
    serviceKey: '9/Vc243KZHuIFi+JjHzMQjFpodJZohurjl8MM0IdBqgAe/eSJELcQfSopXf50XG6Vv3nkxmyQuhz5tainydZng==',
    returnType:'json',
    numOfRows:'100',
    pageNo:'1',
    sidoName: `${sidoname}`,
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
export const getParticle = createAsyncThunk("particles/getParticle", async (sidoname, {rejectWithValue}) => {
  try {
    const response = await axios.get("/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty", {params: 
  {
    serviceKey: '9/Vc243KZHuIFi+JjHzMQjFpodJZohurjl8MM0IdBqgAe/eSJELcQfSopXf50XG6Vv3nkxmyQuhz5tainydZng==',
    returnType:'json',
    numOfRows:'500',
    pageNo:'1',
    sidoName: `${sidoname}`,
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
    reducers: {
      wisha: (state, action) => {
          state.wish = [...state.wish, action.payload]
        }
    },
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
      [getParticle.pending]: (state) => {
        state.loading = true
      },
      [getParticle.fulfilled]: (state, action) => {
        state.loading = false;
        state.sidonametag = action.payload
      },
      [getParticle.rejected]: (state) => {
        state.loading = false;
      },
    },
  });
  export const { wisha  } = particleSlice.actions;
  export default particleSlice.reducer;