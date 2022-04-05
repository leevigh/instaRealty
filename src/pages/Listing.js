import React, { useState } from 'react'
import { Form, ListGroup, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import RentalMap from '../components/RentalMap'
import Rating from '../components/Rating'
import { createRentalReview } from '../store/rentalsSlice'
import { getRental } from '../store/selectedRentalSlice'

import '../styles/Listing.css'
import BookRental from '../components/BookRental'

const Listing = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector(state => state.auth)
    const {status, rental} = useSelector(state => state.rental)


    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const [rating, setRating] = useState(1)
    const [comment, setComment] = useState('')
    
    React.useEffect(() => {
        if(params.id && params.id !== "") {
            dispatch(getRental(params.id))
        }
    }, [dispatch, params])

    React.useEffect(() => {
        if(status==='done' && rental){
            const cordStr = rental?.coordinates??""
            const [lat, lng] = cordStr.split(" ")
            setLat(parseFloat(lat))
            setLng(parseFloat(lng))
        }
    }, [rental, status])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
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

    if (status === 'loading') return <div>Loading...</div>

    return (
        <div>
            <Navigation />
            <div className="details-container">
                <div className="details-container__image-map">
                    <div className="property-image__container">
                        <img className="property-image" src={rental && rental.propertyPhotos} alt={rental && rental.propertyType} />
                    </div>

                    <div className="rental-map">
                        <RentalMap center={{lat, lng}} />
                    </div>
                </div>

                <div className="">
                    <div className="my-4">
                            <p className="price">N{rental && rental.price}/yr</p>
                            {rental && rental.pluscode ? 
                            <p>Plus Code: <a href={`https://www.google.com/maps/place/${rental.pluscode}`} target="_blank" rel="noreferrer"><strong>{rental && rental.pluscode}</strong></a></p> : '' }
                            <p>{rental && rental.address}</p>
                            {/* <h4>{rental && rental.propertyType}</h4> */}
                            
                    </div>
                    <div>
                        <Link to={`payment`}>
                            <Button className="rent-btn" variant="default">Rent</Button>
                        </Link>
                            <BookRental />
                    </div>
                </div>

                <hr />

                <div>
                    <h3>Reviews</h3>
                    {rental && rental?.reviews?.length === 0 && <h5>No reviews</h5>}
                    <ListGroup variant='flush'>
                        {rental && rental.reviews.map(review => (
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
                                <Button className="mt-3 submit-btn" type='submit' variant='default'>Submit</Button>
                            </Form>
                            </Col>
                        </Row>
                        ) 
                        : <h6>Please <Link to="/login">Login</Link> to write a review</h6>}
                    </ListGroup.Item>
                    <ul>
                        {/* {rental.reviews.map(review => {
                            <li key={review._id}>
                                jump
                            <li>
                        })} */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Listing
