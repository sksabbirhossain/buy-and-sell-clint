import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllBuyers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/get-allbuyers");
      const AllBuyers = await res.json();
      return AllBuyers.data;
    },
  });
  return (
    <div>
      <h3>all buyers</h3>
      <div className="card">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((buyer) => (
              <tr key={buyer._id}>
                <td>{1}</td>
                <td>{buyer.username}</td>
                <td>{buyer.email}</td>
                <td>
                  <button className="btn btn-sm btn-danger">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
