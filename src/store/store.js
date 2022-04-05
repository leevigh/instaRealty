import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
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