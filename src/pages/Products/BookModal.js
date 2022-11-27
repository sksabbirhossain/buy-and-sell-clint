import React from "react";
import toast from "react-hot-toast";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import { useAuth } from "../../contexts/AuthContext";

const BookModal = ({ getProduct }) => {
  const { currentUser } = useAuth();
  const { productName, resalePrice, photoUrl } = getProduct;

  const handleBooking = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const userEmail = e.target.email.value;
    const productName = e.target.productname.value;
    const price = e.target.price.value;
    const number = e.target.number.value;
    const meetLocation = e.target.meetlocation.value;

    const fromData = {
      userName,
      userEmail,
      productName,
      price,
      number,
      meetLocation,
      photoUrl,
    };

    fetch("http://localhost:5000/api/add-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fromData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("booking successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Form onSubmit={handleBooking}>
              <FormInput
                label="User Name"
                type="text"
                name="username"
                defaultValue={currentUser.displayName}
                disabled
              />
              <FormInput
                label="Email Address"
                type="email"
                name="email"
                defaultValue={currentUser.email}
                disabled
              />
              <FormInput
                label="Product Name"
                type="text"
                name="productname"
                defaultValue={productName}
                disabled
              />
              <FormInput
                label="Product Price"
                type="number"
                name="price"
                defaultValue={resalePrice}
                disabled
              />
              <FormInput
                label=" phone number"
                type="number"
                name="number"
                required
              />
              <FormInput
                label=" meeting location"
                type="text"
                name="meetlocation"
                required
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
