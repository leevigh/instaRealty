import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PaymentService from "../services/payment.service";

export const rentalPayment = createAsyncThunk('rental/payment', async({id, details}, thunkAPI) => {
    try {
        // const response = PaymentService.initializePayment(details, id);
        console.log("I'm FUCKING HERE!!!!")
        const response = PaymentService.initializePayment(details, id)
        .then(response => {
            console.log("FROM THE THUNK> ",response.data)
            return response.data;
        }).catch(error => {
            console.log(error);
            return error;
        })

        const data = await response;
        console.log("Outside Promise",data);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue();
        
        // return error
    }
})

const paymentState = { loading: false, data: {}, error: {} };

const paymentSlice = createSlice({
    name: 'rental/payment',
    initialState: paymentState,
    extraReducers: {
        [rentalPayment.pending]: (state, action) => {
            state.loading = true;
        },

        [rentalPayment.fulfilled]: (state, action) => {
            // state.data = (action.payload);
            console.log(action);
            return {
                ...state,
                loading: false,
                data: {...action.payload}
            }
        },

        [rentalPayment.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
});

const { reducer } = paymentSlice;
export default reducer;
