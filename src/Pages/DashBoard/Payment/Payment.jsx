import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const {id} = useParams()
  console.log(id);

  return (
      <div>
        <h1 className="text-3xl">Please Complete The Payment!!</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm id={id}></CheckoutForm>
        </Elements>
      </div>
  );
};

export default Payment;
