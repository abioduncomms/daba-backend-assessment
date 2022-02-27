import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducer/auth'


const store = configureStore({
  reducer: {
    profile:profileReducer.reducer
  }
})

export default store
