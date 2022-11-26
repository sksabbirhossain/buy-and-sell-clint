import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSellers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/get-allsellers");
      const AllSellers = await res.json();
      return AllSellers.data;
    },
  });
  return (
    <div>
      <h3>all sellers</h3>
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
            {data?.map((seller) => (
              <tr key={seller._id}>
                <td>{1}</td>
                <td>{seller.username}</td>
                <td>{seller.email}</td>
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

export default AllSellers;
