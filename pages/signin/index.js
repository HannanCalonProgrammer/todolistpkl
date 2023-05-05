import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function (props) {
  const router = useRouter();
  return (
    // <div className="Auth-form-container container">
    //   <form className="Auth-form">
    //     <div className="Auth-form-content">
    //       <h3 className="Auth-form-title">Sign Up</h3>
    //       <div className="form-group mt-3">
    //         <label>Add The Username</label>
    //         <input
    //           type="password"
    //           className="form-control mt-1"
    //           placeholder="Enter Username"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Email address</label>
    //         <input
    //           type="email"
    //           className="form-control mt-1"
    //           placeholder="Enter email"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Password</label>
    //         <input
    //           type="password"
    //           className="form-control mt-1"
    //           placeholder="Enter password"
    //         />
    //       </div>
    //       <div className="d-grid gap-2 mt-3">
    //         <button type="submit" className="btn btn-primary">
    //           Submit
    //         </button>
    //       </div>
    //       <p className="forgot-password text-right mt-2">
    //         Forgot <a href="#">password?</a>
    //       </p>
    //     </div>
    //   </form>
    // </div>
    <div className="Auth-form-container">
      <form
        className="Auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      >
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
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
