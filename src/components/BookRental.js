import React from 'react'
import { Modal } from 'react-responsive-modal'
import "react-responsive-modal/styles.css"
import "../styles/BookRental.css"
import { Button, Form } from 'react-bootstrap'

const BookRental = () => {

    const [open, setOpen] = React.useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <>
            <Button onClick={onOpenModal} className="mx-3 book-btn" variant="default">Book</Button>
            <Modal className="booking-modal" open={open} onClose={onCloseModal} center>
                <h3>Book this rental</h3>
                <p>Some random text to make this as long as possible with a lot of things that don't make any sense</p>
                <Form >
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text"></Form.Control>
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" row="3" ></Form.Control>
                    </Form.Group>
                    <Button className="mt-3 submit-btn" type='submit' variant='default'>Submit</Button>
                </Form>
            </Modal>
        </>
    )
}

export default BookRental
