import { configureStore } from '@reduxjs/toolkit'
import singleSlice from './components/slice/singleSlice'

export default configureStore({
  reducer: {
    single:singleSlice
  },
})