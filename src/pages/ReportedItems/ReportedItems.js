import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";

const ReportedItems = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      const res = await fetch("https://buy-amd-sell-server.vercel.app/api/get-report-to-admin");
      const AllBuyers = await res.json();
      return AllBuyers.data;
    },
  });
  console.log(data);
  if (isLoading) {
    return <Spinner />;
  }
    
 //delete product
 const handleDeleteProduct = (id) => {
    axios
      .delete(`https://buy-amd-sell-server.vercel.app/api/delete-product/${id}`)
      .then(() => {
        refetch();
        toast.success("product delete successfull");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("something went worng");
      });
  };
  return (
    <div>
      <h3>Reported Items</h3>
      <div className="card">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
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
                    <td>{ product.status}</td>
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

export default ReportedItems;
