import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useAuth } from "../../contexts/AuthContext";

const MyOrders = () => {
  const { currentUser } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/get-bookings/${currentUser.email}`
      );
      const myOrders = await res.json();
      return myOrders.data;
    },
  });

  if (isLoading) return <Spinner/>;
  return (
    <div>
      <h3>my order</h3>
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

export default MyOrders;
