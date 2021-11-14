import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createRental } from '../store/rental'
import Navigation from './Navigation'
import { Container, Form, Button, Row, Col} from 'react-bootstrap'

const RentalForm = () => {

    const dispatch = useDispatch()

    const [propertyType, setPropertyType] = useState('')
    const [address, setAddress] = useState('')
    const [roomNumber, setRoomNumber] = useState('');
    const [assets, setAssets] = useState('')
    const [price, setPrice] = useState('')
    const [propertyPhotos, setPropertyPhotos] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData()

        formData.append('propertyType', propertyType)
        formData.append('address', address)
        formData.append('roomNumber', roomNumber)
        formData.append('assets', assets)
        formData.append('price', price)
        formData.append('propertyPhotos', propertyPhotos)

        // console.log(formData)
        // console.log(formData.address)
        // console.log(formData.propertyPhotos)

        dispatch(createRental(formData))
        .then( response => {
            console.log(response.payload)
        } )
        .catch(error => console.error(error))

        setPropertyType('')
        setAddress('')
        setAssets('')
        setPrice('')
        setRoomNumber('')
        setPropertyPhotos(null)
    }

    return (
        <div>
            <Navigation />
            <Container>
            <Row>
                <Col sm={4} className="mx-auto" >
                    <Form onSubmit={handleSubmit} className="card p-4">
                        <Form.Control onChange={e => setPropertyType(e.target.value) } value={propertyType} className="my-3" type="text" placeholder="Property Type(ex. 2 Bedroom Apartment)" name="" />

                        <Form.Control onChange={e => setAddress(e.target.value)} value={address} className="my-3" type="text" placeholder="Address" name="" />

                        <Form.Control onChange={e => setRoomNumber(e.target.value)} value={roomNumber} className="my-3" type="text" placeholder="How many rooms?(ex. 1)" name="" />

                        <Form.Control onChange={e => setAssets(e.target.value)} value={assets} className="my-3" type="text" placeholder="Assets(ex. Bed, borehole, Reading table)" name="" />

                        <Form.Control onChange={e => setPrice(e.target.value)} value={price} className="my-3" type="text" placeholder="Price" name="" />

                        <Form.Control onChange={e => setPropertyPhotos(e.target.files[0])} className="my-3" type="file" />

                        <Button className="form__submit-button" type="submit">Submit</Button>
                    </Form>
                </Col>
                
            </Row>
            </Container>
        </div>
    )
}

export default RentalForm
