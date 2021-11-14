import axios from 'axios'
import authHeader from '../helper/auth-header'

const getRentals = () => {
    return axios.get('rentals/');
}

const createRental = (rental) => {
    return axios.post('rentals/', rental, {headers: authHeader()})
}

const rentalService = { getRentals, createRental }
export default rentalService;
