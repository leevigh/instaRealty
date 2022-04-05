import axios from 'axios'
import paymentHeader from '../helper/payment-header'

const createSubaccount = (details) => {
    axios.post(`${process.env.REACT_APP_PAYSTACK_BASE_URL}/subaccount`, details, {headers: paymentHeader()})
}

const paymentService = { createSubaccount }
export default paymentService
