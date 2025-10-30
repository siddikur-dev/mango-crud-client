import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(formData);

    console.log("Login Info:", { email, password, userProfile });
    // main logic implement
    createUser(email, password)
      .then((result) => {
        //get user info from server to db
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("after save user db", data);
              console.log(result.user);
            }
          });
      })
      .catch((error) => console.log(error.message));
    form.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="bg-base-100 p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Number</span>
            </label>
            <input
              type="number"
              name="Number"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="Photo URL"
              placeholder="Enter your Photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="Address"
              placeholder="Enter your Address"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
