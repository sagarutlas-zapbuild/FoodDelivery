import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';
import { paymentClientSecretUrl } from '../../Urls';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

/* fetch(paymentClientSecretUrl, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}
).then(res => res.json());


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(key);
 */
export default function Payments() {
  const [stripePromise, setStripePromise] = useState(undefined);

  const [mode, setMode] = useState("cash")

  useEffect(() => {
    if (mode === "card") {
      fetch(paymentClientSecretUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(key => loadStripe(key))
        .then(promise => setStripePromise(promise));
    }
    else if(mode === "card"){
      setStripePromise(undefined);
    }

  }, [mode])

  useEffect(() => { }, [stripePromise])

  if (!(stripePromise === undefined)) {
    return (<Container>
      <Nav variant="tabs" activeKey={"card"}>
        <Nav.Item>
          <Nav.Link eventKey="card">Card</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cash" onSelect={()=>setMode("cash")}>Cash</Nav.Link>
        </Nav.Item>
      </Nav>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Container>
    );
  }
  else {
    return (<Container>
      <Nav variant="tabs" activeKey={"cash"}>
        <Nav.Item>
          <Nav.Link eventKey="card" onSelect={()=>setMode("card")}>Card</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cash">Cash</Nav.Link>
        </Nav.Item>
      </Nav>
      <Button>Order</Button>
      </Container>)
  }
};

