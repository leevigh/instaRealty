import axios from 'axios'
import authHeader from '../helper/auth-header'

const getRentals = () => {
    return axios.get('rentals/');
}

const getRental = (id) => {
    return axios.get(`rentals/${id}`)
}

const createRental = (rental) => {
    return axios.post('rentals/', rental, {headers: authHeader()})
}

const createRentalReview = (id, {rating, comment}) => {
    console.log("res", id, {rating, comment})
    return axios.post(`rentals/${id}/review`, {rating, comment}, {headers: authHeader()})
}

const rentalService = { getRentals, getRental, createRental, createRentalReview }
export default rentalService;
