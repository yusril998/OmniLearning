import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface todoJson {
    userId: any;
    id: any;
    title: any;
    completed: any;
  }

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    var response:any;
    // const response = await fetch('https://reqres.in/api/users?delay=1');
    axios.get<todoJson[]>('https://jsonplaceholder.typicode.com/todos')
          .then(res => {
           
            response = res;
          });
          return response.data as todoJson[];
    
  });
  const usersSlice = createSlice({
      name: "users",
      initialState: {
        users: [] as todoJson[],
        loading: false
      },
      reducers: {},
      extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
          state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
          state.users = action.payload
          state.loading = false
        })
        builder.addCase(fetchUsers.rejected, state => {
          state.loading = false
        })
      }
    })

export default usersSlice.reducer