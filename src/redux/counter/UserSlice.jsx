import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    User_name: "R K Chauhan"
}

export const userSlice = createSlice({
    name: 'username',
    initialState,
    reducers:{
        UpdateUser : (state, action) =>{
            state.User_name = action.payload;
        },
        OriginalUser : (state) =>{
            state.User_name= initialState.User_name;
        }
    }
})

export const {UpdateUser, OriginalUser} = userSlice.actions;
export default userSlice.reducer;