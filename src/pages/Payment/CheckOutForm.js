import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";

const CheckoutForm = ({ order }) => {
  const navigate = useNavigate();
  const handlePayment = (e) => {
    e.preventDefault();
    const formData = {
      cardNumber: e.target.cardnumber.value,
      experity: e.target.cardexperdate.value,
      cvc: e.target.cardexperdate.value,
      productId: order[0].productId,
      orderId: order[0]._id,
    };

    fetch("https://buy-amd-sell-server.vercel.app/api/add-payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("payment successfull");
        navigate("/dashboard/myorders");
      });
  };

  return (
    <>
      <Form onSubmit={handlePayment}>
        <FormInput
          label="card Number "
          type="number"
          name="cardnumber"
          placeholder="card number"
        />
        <div className="row">
          <div className="col-md-6">
            <FormInput
              label="card experity date"
              type="number"
              name="cardexperdate"
              placeholder="MM/YY"
            />
          </div>
          <div className="col-md-6">
            <FormInput
              label="CVC "
              type="number"
              name="cardcvc"
              placeholder="CVC"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          payment
        </button>
      </Form>
    </>
  );
};

export default CheckoutForm;
