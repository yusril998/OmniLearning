import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface todoJson {
    userId: any;
    id: any;
    title: any;
    completed: any;
  }

export const fetchtodos = createAsyncThunk('todos/fetchtodos', async () => {
    var response:any;
    // const response = await fetch('https://reqres.in/api/todos?delay=1');
    axios.get<todoJson[]>('https://jsonplaceholder.typicode.com/todos')
          .then(res => {
           
            response = res;
          });
          return response.data as todoJson[];
    
  });
  const todosSlice = createSlice({
      name: "todos",
      initialState: {
        todos: [] as todoJson[],
        loading: false
      },
      reducers: {},
      extraReducers: builder => {
        builder.addCase(fetchtodos.pending, state => {
          state.loading = true
        })
        builder.addCase(fetchtodos.fulfilled, (state, action) => {
          state.todos = action.payload
          state.loading = false
        })
        builder.addCase(fetchtodos.rejected, state => {
          state.loading = false
        })
      }
    })

export default todosSlice.reducer