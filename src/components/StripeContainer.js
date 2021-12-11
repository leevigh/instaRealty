import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from './CheckoutForm'

const PUBLIC_KEY = "pk_test_51JDsZqKYD3J4SePqQ0MMTnR8np0AyIHju9TT4eui8LfyzhgnachXR9UA0qIS8Q6dxC93d4SCBmo1Orqw9nX7TebE00yhM3ryCv"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Stripe = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default Stripe
