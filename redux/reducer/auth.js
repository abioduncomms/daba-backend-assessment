import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    me:null
  },
  reducers: {
    addMe: (state,action) => {
      state.me = action.payload
    }
  }
})

export const { addMe } = profileSlice.actions

export default profileSlice
