import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import RentalService from "../services/rental.service";

export const getRental = createAsyncThunk('rental/get-rental', async(id) => {
    console.log("here!!")
    try {
        const response = await RentalService.getRental(id)
        const { data } = response.data

        // console.log("got a rental", response.data)
        console.log("Response>>>>  ", response.data.data)
        return data
    } catch (error) {
        console.log("ERROR ", error)
        return error
    }
})

const initialState = {rental: {}};

const selectedRentalSlice = createSlice({
    name: "rental",
    initialState,
    extraReducers: {
        [getRental.fulfilled]: (state, action) => {
            state.rental = action.payload
        },

        [getRental.rejected]: (state) => {
            return state.rental
        },
    }
})

const { reducer } = selectedRentalSlice;

export default reducer;
