import axios from 'axios'

const getRentals = () => {
    return axios.post('rentals/');
}

// const login = async (user) => {
//     const result = await axios.post('users/login', user)
    
//     if(result.data.token) {
//         localStorage.setItem("user", JSON.stringify(result.data))
//     }

//     return result.data
// }

// const logout = () => {
//     localStorage.removeItem("user")
// }

// const authService = { register, login, logout }
// export default authService;
