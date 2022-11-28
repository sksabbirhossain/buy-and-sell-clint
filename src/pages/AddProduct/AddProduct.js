import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import { useAuth } from "../../contexts/AuthContext";

const AddProduct = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      productName: form.productname.value,
      photoUrl: form.photourl.value,
      resalePrice: form.resaleprice.value,
      originalPrice: form.originalprice.value,
      productCondition: form.productcondition.value,
      mobileNumber: form.mobilenumber.value,
      location: form.location.value,
      pyear: form.yearofpurchase.value,
      uyear: form.yearofuse.value,
      description: form.description.value,
      categoryId: form.categoryname.value,
      createdAt: new Date(),
      sellerName: currentUser.displayName,
      userEmail: currentUser.email,
      status: "available",
    };

    //store product data
    fetch("https://buy-amd-sell-server.vercel.app/api/add-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("product added successfully");
        e.target.reset();
        navigate("/dashboard/my-products");
      });
  };

  //fetch all categories
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("https://buy-amd-sell-server.vercel.app/api/allcategories");
      const categories = await res.json();
      return categories.data;
    },
  });
  if (isLoading) return "Loading...";

  return (
    <div>
      <h3 className="shadow p-3 rounded">Add product</h3>
      <div className="card p-3">
        <Form onSubmit={handleAddProduct}>
          <div className="row">
            <div className="col-md-6">
              <FormInput
                label="Product Name"
                type="text"
                name="productname"
                placeholder="product name here"
              />
              <FormInput
                label="Product PhotoUrl"
                type="text"
                name="photourl"
                placeholder="product photourl"
              />
              <FormInput
                label="Resale price"
                type="number"
                name="resaleprice"
                placeholder="resale price"
              />
              <FormInput
                label="Original Price"
                type="number"
                name="originalprice"
                placeholder="original price"
              />
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Categories
                </label>
                <select name="categoryname" className="form-control">
                  {data?.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Condition Type
                </label>
                <select name="productcondition" className="form-control">
                  <option value="excellent">excellent</option>
                  <option value="good">good</option>
                  <option value="fair">fair</option>
                </select>
              </div>
              <FormInput
                label="Mobile Number"
                type="number"
                name="mobilenumber"
                placeholder="mobile number"
              />
              <FormInput
                label="Location"
                type="text"
                name="location"
                placeholder="location"
              />
            </div>
            <div className="col-md-6">
              <FormInput
                label="Year of purchase "
                type="number"
                name="yearofpurchase"
                placeholder="year of purchase "
              />
              <FormInput
                label="years of use "
                type="number"
                name="yearofuse"
                placeholder="year of use "
              />
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="3"
                  className="form-control"
                  placeholder="description"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Add Product
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
