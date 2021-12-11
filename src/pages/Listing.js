import React, { useEffect, useState } from 'react'
import { Form, ListGroup, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import RentalMap from '../components/RentalMap'
import Rating from '../components/Rating'
import RentalService from '../services/rental.service'
import { createRentalReview, getRentals } from '../store/rentalsSlice'
import { getRental } from '../store/selectedRentalSlice'

import '../styles/Listing.css'
import axios from 'axios'

const Listing = () => {
    const rental = useSelector(state => state)
    const {isLoggedIn} = useSelector(state => state.auth)
    const params = useParams()
    const dispatch = useDispatch()


    const [rating, setRating] = useState(1)
    const [comment, setComment] = useState('')
    // const [latlng, setLatlng] = useState([])
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')

    console.log("Rental>> ", rental)

    const getRentalDetail = async (rental) => {

        // dispatch(getRental(params.id))
        // .then(res => console.log(res))
        // .catch(err => console.log("Err ", err))

        // console.log("I'M FUCKING HERE!!! >>>  ", rental)

        const latlng = rental && rental.coordinates
        console.log(latlng)
        // setLatlng(rental?.data?.coordinates.split(' '))

        console.log("TOP LOG, RENTAL ", rental)

        console.log("COORDS ",rental.coordinates)
        console.log("Rental(!important)>>> ", rental)

        console.log(latlng)

        let lat = latlng && latlng[0]
        let lng = latlng && latlng[1]

        setLat(parseFloat(lat))
        setLng(parseFloat(lng))
    }

    
    useEffect(() => {
        if(params.id && params.id !== "") {
            console.log("PARAMS ",params)
            // getRentalDetail()
            dispatch(getRental(params.id))
        }
        // console.log("Rental>> ", rental)
    }, [dispatch, params])

    useEffect(() => {
        if(rental !== {}){

            getRentalDetail(rental)
        }
        console.log("Rental>> ", rental)
    }, [rental])

    const handleSubmit = (e) => {
        e.preventDefault();

        // const formData = new FormData()

        // formData.append('rating', rating)
        // formData.append('comment', comment)
        // console.log("Form data", formData);
        let body = {
            "id": params.id,
            "rating": parseInt(rating),
            "comment": comment
        }
        console.log("Body", body, params.id);
        
        dispatch(createRentalReview(body))
        .then(response => console.log(response.payload))
        .catch(err => console.log(err))

        setRating(1)
        setComment('')
    }

    // console.log(parseInt(rating))

    // const latlng = rental.data.coordinates.split(' ')
    // const lat = parseFloat(latlng[0])
    // const lng = parseFloat(latlng[1])
    console.log(lat, lng)


    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="property-image__container">
                    <img className="property-image" src={rental.data && rental.data.propertyPhotos} alt={rental.data && rental.data.propertyType} />
                </div>

                <div className="rental-map">
                    <RentalMap center={{lat, lng}} />
                </div>
            </div>

            <div className="">
                <div className="my-4">
                        <h4>{rental.data && rental.data.propertyType}</h4>
                        <h4>{rental.data && rental.data.address}</h4>
                        <h4>N{rental.data && rental.data.price}</h4>
                        {rental.data && rental.data.pluscode ? <h4>{rental.data && rental.data.pluscode}</h4> : '' }
                        
                </div>
                <div>
                    <Link to={`payment`}>
                        <Button variant="success">Rent</Button>
                    </Link>
                        <Button className="mx-3" variant="primary">Book</Button>
                </div>
            </div>

            <hr />

            <div>
                <h3>Reviews</h3>
                {rental.data && rental.data.reviews.length === 0 && <h5>No reviews</h5>}
                <ListGroup variant='flush'>
                    {rental.data && rental.data.reviews.map(review => (
                        <ListGroup.Item key={review._id}>
                            <strong>{review.name}</strong>
                            <Rating value={review.rating} color="#f8e825" />
                            <p>{review.comment}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                <ListGroup.Item>
                    <h5>Write a Review for this Rental</h5>
                    {isLoggedIn ? (
                    <Row className="mx-auto">
                        <Col md={6} className="mx-auto">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId='rating'>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control name="rating" value={rating} onChange={e => setRating(e.target.value)} type="number" min="1" max="5"></Form.Control>
                                {/* <Form.Control as="select" value={rating} onChange={(e) => setRating(e.target.value)}>
                                    <option value=''>Select...</option>
                                    <option value='1'>1 - Poor</option>
                                    <option value='2'>2 - Fair</option>
                                    <option value='3'>3 - Good</option>
                                    <option value='4'>4 - Very Good</option>
                                    <option value='5'>5 - Excellent</option>
                                </Form.Control> */}
                            </Form.Group>
                            <Form.Group controlId="comment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control name="comment" as="textarea" row="3" value={comment} onChange={(e) => setComment(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Button className="mt-3" type='submit' variant='primary'>Submit</Button>
                        </Form>
                        </Col>
                    </Row>
                    ) 
                    : <h6>Please <Link to="/login">Login</Link> to write a review</h6>}
                </ListGroup.Item>
                <ul>
                    {/* {rental.data.reviews.map(review => {
                        <li key={review._id}>
                            jump
                        <li>
                    })} */}
                </ul>
            </div>
        </div>
    )
}

export default Listing
