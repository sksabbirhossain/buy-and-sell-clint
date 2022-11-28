import "moment-timezone";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import VerifiedBtn from "../../components/VerifiedBtn/VerifiedBtn";
import { useAuth } from "../../contexts/AuthContext";
import BookModal from "./BookModal";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [getProduct, setGetProduct] = useState({});
  const [verifiedUser, setVerifiedUser] = useState({});
  const { currentUser } = useAuth();
  const { id } = useParams();

  //get products
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, [id]);

  //get verified users
  useEffect(() => {
    fetch(`http://localhost:5000/api/get-user?id=${currentUser.uid}`)
      .then((res) => res.json())
      .then((data) => setVerifiedUser(data.data[0]));
  }, [currentUser.uid]);


  //handle report to admin
  const handleReportAdmin = (id) => {
    fetch("http://localhost:5000/api/report-to-admin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productId: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Repoet to admin  successfull");
      });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          {product?.map((items) => (
            <div className="col-md-4" key={items._id}>
              <div className="card product-card shadow border-0 mb-2">
                <img
                  src={items.photoUrl}
                  className="card-img-top"
                  alt="..."
                  style={{ maxWidth: "250px", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{items.productName}</h5>
                  <div className="d-flex justify-content-between">
                    <span className="sallerName">
                      Seller: {items.sellerName}
                      <span>{verifiedUser.verified ?<VerifiedBtn/> : ""}</span>
                    </span>
                    <p>
                      <Moment fromNow>{items.createdAt}</Moment>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="bg-dark px-1 rounded text-light">
                      Original price: {items.originalPrice}tk
                    </p>
                    <p className="bg-success px-1 rounded text-light">
                      Resale price: {items.resalePrice}tk
                    </p>
                  </div>
                  <p>Location: {items.location}</p>
                  <p>years of use: {items.uyear} </p>

                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-sm btn-success mt-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setGetProduct(items)}
                    >
                      Book Now
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleReportAdmin(items._id)}
                    >
                      {" "}
                      Report to Admin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookModal getProduct={getProduct} />
    </section>
  );
};

export default Products;
