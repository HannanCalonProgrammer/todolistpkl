import Link from "next/link";
import React, { useState } from "react";
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const pb = new PocketBase("http://127.0.0.1:8090");

    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      passwordConfirm: event.target.passwordConfirm.value,
    };

    console.log(data);

    await pb.collection("users").create(data);
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Add The Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              name="passwordConfirm"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <Link href="/signin" className="forgot-password text-right">
            Login here!
          </Link>
        </form>
      </div>
    );
  }
}
