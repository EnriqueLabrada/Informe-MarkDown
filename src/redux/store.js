import { configureStore } from '@reduxjs/toolkit'
import informeReducer from './informeSlice'

export const store = configureStore({
    reducer:{
        informe:informeReducer
    }
})