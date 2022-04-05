import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import RentalService from "../services/rental.service";

export const getRentals = createAsyncThunk('rentals/get-rentals', async() => {
    try {
        const response = await RentalService.getRentals()

        return response.data;
    } catch (error) {
        return error
    }
})


export const createRental = createAsyncThunk('rentals/create-rental', async (rental, thunkAPI) => {
    try {
        const data = await RentalService.createRental(rental)

        console.log("rental created successfully: ", data)
        return { rental: data }
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue();
    }
})

export const createRentalReview = createAsyncThunk('rental/create-rental-review', async (data) => {
    const { id, rating, comment } = data
    console.log("Review>>>>", {id, rating, comment})
    try {
        const response = await RentalService.createRentalReview(id, {rating, comment})
        console.log("Review successful")
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
})

const initialState = {status: "loading", rentals: [], review: {}};

const rentalsSlice = createSlice({
    name: "rentals",
    initialState,
    extraReducers: {
        [getRentals.fulfilled]: (state, action) => {
            state.rentals = action.payload
            state.status = "done"
        },

        [getRentals.rejected]: (state) => {
            state.status = "error";
            return state;
        },

        [createRental.fulfilled]: (state, action) => {
            state.rentals=(action.payload)
        },

        [createRental.rejected]: (state) => {
            return state.rentals
        },

        [createRentalReview.fulfilled]: (state, action) => {
            state.review = action.payload
        },

        [createRentalReview.rejected]: (state, action) => {
            return state.review
        }
    }
})



const { reducer } = rentalsSlice;


export default reducer;
