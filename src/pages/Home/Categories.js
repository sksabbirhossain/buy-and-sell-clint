import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section>
      <div className="container">
        <h2 className="my-4 text-center">All Categories</h2>
        <div className="row">
          <div className="col-md-4 ">
            <Link to="/">
              <div className="card mb-4" style={{ minWidth: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-title">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
