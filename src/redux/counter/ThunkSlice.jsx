import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { fetchTodos } from "../thunk/user";

const initialState = {
    user: 0,
    status: false,
    entities: []
}

// console.log(this.entities, 'sssssssssssssss');

// export const fetchTodos = createAsyncThunk('fetchTodos/userDataFetch', async () => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
//     const data = await response.data ;
//     console.log(data,'iiiiiiiiiiiiiiii');
//     return data;
//   })
 

export const fetchToDo = createSlice({
    name: 'user',
    initialState,
    reducers :{
        addUser: (state) =>{
            state.user += 1
        },
        removeUser : (state) =>{
            state.user -= 1
        }
    },
    extraReducers: builder => {
        builder
          .addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchTodos.fulfilled, (state, action) => {
            // const newEntities = {}
            // action.payload.forEach(todo => {
            //   newEntities[todo.id] = todo
            // })
            // state.entities = newEntities
            state.entities = action.payload
            state.status = 'user name updated'
          })
          .addCase(fetchTodos.rejected, (state)=>{
            state.status = 'rejected'
          })
      }
})

export const {addUser, removeUser} = fetchToDo.actions;
export default fetchToDo.reducer;