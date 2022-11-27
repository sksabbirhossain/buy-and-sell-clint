import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import BookModal from "../Products/BookModal";

const AdvertisedItems = () => {
  const [product, setProduct] = useState([]);
  const [getProduct, setGetProduct] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/api/my-product/get-advertise")
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, []);

  console.log(product);

  return (
    <>
      {product?.length > 0 && (
        <section>
          <div className="container">
            <h2 className="text-uppercase mb-3">Advertise</h2>
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
                          <span></span>
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

                      <button
                        type="button"
                        className="btn btn-sm btn-success mt-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setGetProduct(items)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <BookModal getProduct={getProduct} />
        </section>
      )}
    </>
  );
};

export default AdvertisedItems;
