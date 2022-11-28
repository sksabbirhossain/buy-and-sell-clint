import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51M8ztPHF8W9jmg2G9OO4mUEVQiZxUKmeK5II9XYL14sEf4C6piFjNRTyy0vaw0gtQGt4rysOhl8Y2LFcXUi7gW3n00EM8bGuef"
);

const Payment = () => {
  const [order, setOrder] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://buy-amd-sell-server.vercel.app/api/get-booking/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data.data));
  }, [id]);

  return (
    <div>
      <h3>Payment</h3>
      <div className="col-md-4">
        <div className="card p-3">
          <div>
            <Elements stripe={stripePromise}>
              <CheckOutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
