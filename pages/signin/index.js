import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import pb from "../../config/pocketbase";

export default function (props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (pb.authStore.isValid) {
    router.push("/home");
  }

  async function handleLogin() {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

    if (pb.authStore.isValid) {
      router.push("/home");
    }
    console.log(authData);
  }

  return (
    <div className="Auth-form-container">
      <form
        className="Auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <Link href="/signup" className="forgot-password text-right">
          Register here!
        </Link>
      </form>
    </div>
  );
}
