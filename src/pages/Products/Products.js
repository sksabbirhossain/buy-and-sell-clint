import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, [id]);
  
  return (
    <section>
      <div className="container">
        <div className="row">
          {product?.map((items) => (
            <div className="col-md-6" key={items._id}>
              <div className="card mb-2">
                <img
                  src={items.photoUrl}
                  className="card-img-top"
                  alt="..."
                  style={{ maxWidth: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{items.productName}</h5>
                  <p>seller's name: {items.sellerName} </p>
                  <p className="card-text">{items.locaton}</p>
                  <p>original price: {items.originalPrice} Taka</p>
                  <p>resale price: {items.resalePrice} Taka</p>
                  <p>years of use: {items.pyear} </p>
                  <p>Post Time:{items.createdAt}</p>
                  <button className="btn btn-primary">Book now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
