import { configureStore } from '@reduxjs/toolkit'
import couterReducer from './counter/CounterSlice'
import userSlice from './counter/UserSlice'

export const store = configureStore({
  reducer: {
    counter: couterReducer,
    username: userSlice,
  },
})