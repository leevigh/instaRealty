import axios from 'axios'
import paymentHeader from '../helper/payment-header'

// const createSubaccount = (details) => {
//     axios.post(`${process.env.REACT_APP_PAYSTACK_BASE_URL}/subaccount`, details, {headers: paymentHeader()})
// }

const initializePayment = async (details, id) => {
    return await axios.post(`rentals/initialize/${id}`, details, { headers: paymentHeader() })
}

const paymentService = { initializePayment }
export default paymentService
