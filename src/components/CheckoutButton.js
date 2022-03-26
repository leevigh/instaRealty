import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const CheckoutButton = ({ price }) => {
    const publishableKey = "pk_test_51JDsZqKYD3J4SePqQ0MMTnR8np0AyIHju9TT4eui8LfyzhgnachXR9UA0qIS8Q6dxC93d4SCBmo1Orqw9nX7TebE00yhM3ryCv"

    return (
        <StripeCheckout
            label="pay now"
            name="instarealty LLC"
            billingAddress
            shippingAddress
            description={`Your rental price is &#8358;${price}`}
        />
    )
}
