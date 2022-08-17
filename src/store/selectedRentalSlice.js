import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import RentalService from "../services/rental.service";

export const getRental = createAsyncThunk('rental/get-rental', async(id) => {
    console.log("here!!")
    try {
        const response = await RentalService.getRental(id)
        const { data } = response.data
        return data
    } catch (error) {
        return error
    }
})

const initialState = {status: 'loading', rental: {}};

const selectedRentalSlice = createSlice({
    name: "rental",
    initialState,
    extraReducers: {
        [getRental.fulfilled]: (state, action) => {
            state.rental = action.payload
            state.status = 'done'
        },

        [getRental.rejected]: (state) => {
            state.status = 'error'
            return state
        },
    }
});

const { reducer } = selectedRentalSlice;

export default reducer;
