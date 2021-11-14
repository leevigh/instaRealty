import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import rentalReducer from './rental'

const store = configureStore({
    reducer: {
        auth: authReducer,
        rental: rentalReducer
    }
})

export default store