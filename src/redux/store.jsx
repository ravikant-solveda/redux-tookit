import { configureStore } from '@reduxjs/toolkit'
import couterReducer from './counter/CounterSlice'
import userSlice from './counter/UserSlice'
import ThunkSlice from './counter/ThunkSlice'

export const store = configureStore({
  reducer: {
    counter: couterReducer,
    username: userSlice,
    user: ThunkSlice,
  },
})