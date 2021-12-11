import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRentals } from '../../store/rentalsSlice'
import { getRental } from '../../store/selectedRentalSlice'
import { Link } from 'react-router-dom'
import { Container, Button, Col} from 'react-bootstrap'
import Navigation from '../../components/Navigation'

import './Listings.css'
import Rating from '../../components/Rating'

const Listings = () => {
    const dispatch = useDispatch()
    const {rentals} = useSelector(state => state.rentals)

    useEffect(() => {
        dispatch(getRentals())
    }, []);

    console.log(rentals.data)

    return (
        <div>
        {/* <div className="mx-auto"> */}
            <Navigation />
            <section className='listing' >
                {/* <Col lg={4}> */}
                <div class="row my-4">
                    {rentals.data && rentals.data.map((rental) => (
                        <div key={rental._id} className="listing__card col-lg-6 col-md-4 col-sm-8 col-xs-8 mx-3">
                        <img className="card__image" src={rental.propertyPhotos} alt={rental.propertyType} />
                        <span>
                            <i className="far fa-heart favorite"></i>
                        </span>
                        <div className="my-3">
                            <h5>{rental.propertyType}</h5>
                            <span className="price">N{rental.price}</span>
                            
                            <div>
                                <Rating value={rental.ratings} text={`(${rental.numReviews})`} color="#f8e825" />
                            </div>
                            <div>
                                <Link to={`/${rental._id}`}>
                                <Button onClick={() => dispatch(getRental(rental._id))}  className="btn btn-success">Details</Button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                {/* </Col> */}
            </section>

        </div>
    )
}

export default Listings
