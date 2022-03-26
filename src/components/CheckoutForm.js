import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useParams } from 'react-router'
import authHeader from '../helper/auth-header'
import Navigation from './Navigation'

const CheckoutForm = ({ amount }) => {
    const stripe = useStripe()
    const elements = useElements()
    const params = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            console.log("Stripe 23 | token generated: ", paymentMethod)

            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                `rentals/${params.id}/payment`,
                {
                amount: 999,
                id: id,
                }, authHeader()
            );
        
                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                    console.log("CheckoutForm.js 25 | payment successful!");
                }
            } catch (error) {
            console.log("CheckoutForm.js 28 | ", error);
            }

        } else {
            console.log(error.message)
        }
    }

    return (
        <>
        <Navigation />
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" className="btn btn-success">Pay</button>
        </form>
        </>
    )
}

export default CheckoutForm
