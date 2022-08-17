import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';
import { rentalPayment } from '../store/paymentSlice';

const PayRent = ({ amount }) => {

    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [phonenumber, setPhonenumber] = React.useState('');

    const {data} = useSelector(state => state.payment);

    const dispatch = useDispatch()
    const params = useParams();

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    React.useEffect(() => {
        if(data.payment_url) {
            window.location.href = data.payment_url
        }
    }, [data.payment_url]) 

    const proceedToPayment = (e) => {
        e.preventDefault();

        let details = {
            amount,
            email,
            name,
            phonenumber
        }


        dispatch(rentalPayment({id:params.id, details}))
    }

    // React.useEffect(() => {
    //     console.log("Payment URL> ",data.payment_url)
    //     if(data.payment_url) {
    //         window.location.href = data.payment_url;
    //     }
    // }, [data.payment_url])

    return (
        <div>
            <Button onClick={onOpenModal} className="bg-green-500 p-2 rounded-md text-white" variant="default">Rent</Button>
            <Modal className="booking-modal" open={open} onClose={onCloseModal} center>
                <h3>Payment Info</h3>
                <Form >
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text" value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" value={phonenumber} onChange={e => setPhonenumber(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button 
                        className="mt-3 submit-btn" 
                        type='submit' 
                        variant='default'
                        onClick={proceedToPayment}>
                            Proceed
                    </Button>
                </Form>
            </Modal>
        </div>
    )
}

export default PayRent