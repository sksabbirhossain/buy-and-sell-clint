import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";
import VerifiedBtn from "../../components/VerifiedBtn/VerifiedBtn";

const AllSellers = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/get-allsellers");
      const AllSellers = await res.json();
      return AllSellers.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  //verify seller
  const handleVerifySeller = (id) => {
    alert(id);
    fetch(`http://localhost:5000/api/verify-seller/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("seller virify successfull");
      });
  };

  //delete seller
  const handleDeleteSeller = (id, email) => {
    axios
      .delete(`http://localhost:5000/api/delete-user/${id}?email=${email}`)
      .then(() => {
        refetch();
        toast.success("user delete successfull");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("something worng");
      });
  };

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
              <th scope="col">Status</th>
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
                  {seller.verified ? (
                    <>
                      <div className="d-flex ">
                      <span className="pe-1">verified</span> <VerifiedBtn />
                      </div>
                    </>
                  ) : (
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleVerifySeller(seller._id)}
                    >
                      verify
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteSeller(seller._id, seller.email)}
                  >
                    delete
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

export default AllSellers;
