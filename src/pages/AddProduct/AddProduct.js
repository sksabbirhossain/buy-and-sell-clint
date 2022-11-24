import React from "react";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";

const AddProduct = () => {
  return (
    <div>
      <h3 className="shadow p-3 rounded">Add product</h3>
      <div className="card p-3">
        <Form>
          <div className="row">
          <div className="col-md-6">
            <FormInput label="Product Name" type="text" name="productname" placeholder="product name here"/>
            <FormInput label="Resale price" type="number" name="resaleprice" placeholder="resale price"/>
            <FormInput label="Original Price" type="number" name="originalprice" placeholder="original price"/>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Condition Type</label>
                <select name="productcondition" className="form-control">
                    <option value="excellent">excellent</option>
                    <option value="good">good</option>
                    <option value="fair">fair</option>
                </select>
            </div>
            <FormInput label="Mobile Number" type="number" name="mobilenumber" placeholder="mobile number"/>
            <FormInput label="Location" type="text" name="location" placeholder="location"/>
          </div>
          <div className="col-md-6">
          <FormInput label="Year of purchase " type="number" name="yearofpurchase" placeholder="year of purchase "/>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Description</label>
            <textarea name="description" rows="3" className="form-control" placeholder="description"></textarea>
          </div>        
          <button type="submit" className="btn btn-success w-100">Add Product</button>
          </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
