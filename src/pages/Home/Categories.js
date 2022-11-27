import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const Categories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/allcategories");
      const categories = await res.json();
      return categories.data;
    },
  });
  if (isLoading) return <Spinner/>;

  return (
    <section>
      <div className="container">
        <h2 className="text-uppercase mb-3">All Categories</h2>
        <div className="row">
          {data?.map((category) => (
            <div className="col-md-4 " key={category._id}>
              <Link to={`/category/${category._id}`}>
                <div className="card mb-4" style={{ minWidth: "18rem", height: "120px" }}>
                  <div className="d-flex align-items-center p-2">
                    <img
                      src={category.photoUrl}
                      className="card-img-top"
                      alt="category"
                      style={{ width: "100px" }}
                    />
                    <div className="card-body text-end">
                      <h1 className="card-title">{category.categoryName}</h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
