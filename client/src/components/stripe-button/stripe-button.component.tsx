import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { IStripeCheckout } from '../../data-types/stripe-types'

const StripeCheckoutButton: React.FC<IStripeCheckout> = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HcWudGZJjAs4PtjBv6iLAlBFFXHa0V1EtYrjyXaaZLq0dbBK51QLNFshxDCRcqZL74kz2oVUc4TzWNPssxVEWRK00aLHb6vjF'

    const onToken = (token: any) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log("Payment Error: ", error);
            alert(
                'There was an issue with your payment'
            );
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;