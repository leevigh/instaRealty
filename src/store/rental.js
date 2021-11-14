import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import RentalService from "../services/rental.service";

export const getRentals = createAsyncThunk('rental/get-rentals', async() => {
    try {
        const response = await RentalService.getRentals()

        return response.data;
    } catch (error) {
        return error
    }
})

export const createRental = createAsyncThunk('rental/create-rental', async (rental, thunkAPI) => {
    try {
        const data = await RentalService.createRental(rental)

        console.log("rental created successfully: ", data)
        return { rental: data }
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue();
    }
})

const initialState = {
    rentals: []
}

const rentalSlice = createSlice({
    name: "rental",
    initialState,
    extraReducers: {
        [getRentals.fulfilled]: (state, action) => {
            state.rentals = action.payload
        },

        [getRentals.rejected]: (state) => {
            state.rentals = [];
        },

        [createRental.fulfilled]: (state, action) => {
            state.rentals=(action.payload)
        },

        [createRental.rejected]: (state) => {
            return state.rentals
        }
    }
})

const { reducer } = rentalSlice;
export default reducer;
