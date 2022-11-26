import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const MyProducts = () => {
  const {currentUser} = useAuth()
  const { data, isLoading } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/get-my-products?email=${currentUser.email}`);
      const myProducts = await res.json();
      return myProducts.data;
    },
  });
  if (isLoading) {
    return "loading...";
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
                  <button className="btn btn-sm btn-success">advertise</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
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
