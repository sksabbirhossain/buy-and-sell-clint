import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import Spinner from "../../components/Spinner/Spinner";
import { useAuth } from "../../contexts/AuthContext";
import styles from "../../styles/Signup.module.css";

const Signup = () => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { userSignup, googleSignin } = useAuth();
  const navigate = useNavigate();

  // form handle and signup function
  const handleUserSignup = (e) => {
    const userRole = e.target.userrole.value;
    setLoading(true);
    e.preventDefault();
    //   validation
    if (password !== confirmPassword) {
      setLoading(false);
      return setError("password not match");
    }

    //user signup by email and password
    userSignup(email, password, username)
      .then((userInfo) => {
        const user = userInfo.user;
        addUser(userRole, user.uid);
        // update profile
        updateProfile(user, {
          displayName: username,
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(error.message);
      });
  };

  // google signup function
  const handleGoogleSignup = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Google SignUp successful");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  //also create user in mongodb
  function addUser(role, userId) {
    fetch("http://localhost:5000/api/add-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        userRole: role,
        userId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("signup successfull");
      });
  }
  if (loading) {
  return <Spinner/>
}
  return (
    <section className="mt-4 mt-md-5 ">
      <div className="container">
        <div className="shadow py-3 ">
          <h2>SignUP</h2>
        </div>
        <div className="card-items mt-4">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="card p-3 mb-4 shadow">
                <Form onSubmit={handleUserSignup}>
                  <FormInput
                    label="User Name"
                    type="text"
                    name="name"
                    placeholder="user name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <FormInput
                    label="User Email"
                    type="email"
                    name="email"
                    placeholder="user email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      User Type
                    </label>
                    <select name="userrole" className="form-control">
                      <option value="buyer">buyer</option>
                      <option value="seller">seller</option>
                    </select>
                  </div>
                  <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <FormInput
                    label="Confirm Password"
                    type="password"
                    name="cpassword"
                    placeholder="comfirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <p className="text-danger fw-bold">{error}</p>
                  <Button className="mt-2 w-100">
                    Signup <FaArrowRight />{" "}
                  </Button>
                </Form>
                <span className="py-2 text-center">OR</span>
                <div className="shadow py-3 text-center rounded">
                  <span
                    onClick={handleGoogleSignup}
                    className={styles.signupIcons}
                  >
                    Signup With Google
                  </span>
                </div>
                <p className="mt-2">
                  <small>
                    You have already an account
                    <Link to="/login">
                      {" "}
                      <small className="text-success">please login</small>{" "}
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
