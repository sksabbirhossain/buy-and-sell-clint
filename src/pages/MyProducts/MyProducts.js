import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/get-bookings");
      const myOrders = await res.json();
      return myOrders.data;
    },
  });
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order) => (
              <tr key={order._id}>
                <td>
                  <img
                    src={order.photoUrl}
                    alt=""
                    style={{ width: "40px", borderRadius: "50px" }}
                  />
                </td>
                <td>{order.productName}</td>
                <td>{order.price} tk.</td>
                <td>
                  <button className="btn btn-sm btn-success">Pay</button>
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
