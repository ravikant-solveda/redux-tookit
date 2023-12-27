import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk('fetchTodos/userDataFetch', async () => {  // we write any string at the place of ' fetchTodos/userDataFetch '. It will not affect the code any way but it should be unique for every "createAsyncThunk" function
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    const data = await response.data ;
    console.log(data,'iiiiiiiiiiiiiiii');
    return data;
  })