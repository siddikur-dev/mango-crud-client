import React from "react";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Login Info:", { email, password });
    form.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="bg-base-100 p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/register" className="link link-primary">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
