import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import rentalReducer from './rentalsSlice'
import selectedRentalReducer from './selectedRentalSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        rentals: rentalReducer,
        rental: selectedRentalReducer
    }
})

export default store