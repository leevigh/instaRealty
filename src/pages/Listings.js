import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { logout } from '../store/auth'
import RentalService from '../services/rental.service'
// import { useNavigate } from 'react-router-dom'
import { Container, Button} from 'react-bootstrap'
import Navigation from '../components/Navigation'

import '../Listings.css'

const Listings = () => {
    const [rentals, setRentals] = useState()
    // const dispatch = useDispatch()
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     dispatch(logout())
    // }

    useEffect(() => {
        RentalService.getRentals()
        .then(response => {
            // console.log(response)
            setRentals(response.data.data)
        })
        .catch(error => {
            console.error(error)
        })

        // console.log(rentals)
    }, []);

    return (
        <div className="mx-auto">
            <Navigation />
            <Container >
                <div class="row my-5">
                    {rentals && rentals.map((rental) => (
                        <div key={rental._id} className="card col-lg-3 col-md-4 col-sm col-xs-12">
                        <img className="card__image" src={rental.propertyPhotos} alt={rental.propertyType} />
                        <div className="my-3">
                            <h5>{rental.propertyType}</h5>
                            <span className="price">N{rental.price}</span>
                            
                            <div>
                                <span>🌟 🌟 🌟 🌟 </span>
                            </div>
                            <div>
                                <Button className="btn btn-success">Details</Button>
                            </div>
                        </div>
                        </div>
                    ))}
                    {/* <div className="card col-lg-3 col-md-4 col-sm col-xs-12">
                        <img className="card__image" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="house 1" />
                        <div className="my-3">
                            <h5>2 Bedroom flat</h5>
                            <span className="price">N100,000</span>
                            
                            <div>
                                <span>🌟 🌟 🌟 🌟 </span>
                            </div>
                            <div>
                                <Button className="btn btn-success">Details</Button>
                            </div>
                        </div>
                    </div>

                    <div className="card col-lg-3 col-md-4 col-sm col-xs-12">
                        <img className="card__image" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="house 1" />
                        <div className="my-3">
                            <h5>2 Bedroom flat</h5>
                            <span className="price">N100,000</span>
                            
                            <div>
                                <span>🌟 🌟 🌟 🌟 </span>
                            </div>
                            <div>
                                <Button className="btn btn-success">Details</Button>
                            </div>
                        </div>
                    </div>

                    <div className="card col-lg-3 col-md-4 col-sm col-xs-12">
                        <img className="card__image" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="house 1" />
                        <div className="my-3">
                            <h5>2 Bedroom flat</h5>
                            <span className="price">N100,000</span>
                            
                            <div>
                                <span>🌟 🌟 🌟 🌟 </span>
                            </div>
                            <div>
                                <Button className="btn btn-success">Details</Button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Container>


                
        </div>
    )
}

export default Listings
