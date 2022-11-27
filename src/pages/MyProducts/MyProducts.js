import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";

const MyProducts = () => {
  const { currentUser } = useAuth();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/get-my-products?email=${currentUser.email}`
      );
      const myProducts = await res.json();
      return myProducts.data;
    },
  });
  if (isLoading) {
    return "loading...";
  }

  //delete product
  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:5000/api/delete-product/${id}`)
      .then(() => {
        refetch();
        toast.success("product delete successfull");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("something went worng");
      });
  };

  //ads product
  const handleAdsProduct = (id) => {
    fetch("http://localhost:5000/api//my-product/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({productId : id}),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("advertise successfull");
      });
  }

  return (
    <div>
      <h3>my prdocuts</h3>
      <div className="card">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">ads</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={product.photoUrl}
                    alt=""
                    style={{ width: "40px", borderRadius: "50px" }}
                  />
                </td>
                <td>{product.productName}</td>
                <td>{product.resalePrice} tk.</td>
                <td>available</td>
                <td>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleAdsProduct(product._id)}
                  >
                    advertise
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
