import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import authReducer from './auth'
import rentalReducer from './rentalsSlice'
import selectedRentalReducer from './selectedRentalSlice'
import paymentReducer from './paymentSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedRentals = persistReducer(persistConfig, rentalReducer);
// const persistedPayments = persistReducer(persistConfig, paymentReducer);

const store = configureStore({
    reducer: {
        auth: authReducer,
        rentals: persistedRentals,
        rental: selectedRentalReducer,
        payment: paymentReducer,
    }
})

export default store