import Link from "next/link";
import React, { useState } from "react";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      //       <div className="Auth-form-container">
      //         <form className="Auth-form flex-justify-center">
      //           <div className="Auth-form-content">
      //             <h3 className="Auth-form-title">Sign Up</h3>
      //             <div className="text-center">
      //               Not registered yet?{" "}
      //               <span className="link-primary" onClick={changeAuthMode}>
      //                 Sign Up Now
      //               </span>
      //             </div>
      //             <div className="form-group mt-3">
      //               <label>Add The Username</label>
      //               <input
      //                 type="email"
      //                 className="form-control mt-1"
      //                 placeholder="Enter username"
      //               />
      //             </div>
      //             <div className="form-group mt-3">
      //               <label>Email address</label>
      //               <input
      //                 type="email"
      //                 className="form-control mt-1"
      //                 placeholder="Enter email"
      //               />
      //             </div>
      //             <div className="form-group mt-3">
      //               <label>Password</label>
      //               <input
      //                 type="password"
      //                 className="form-control mt-1"
      //                 placeholder="Enter password"
      //               />
      //             </div>
      //             <div className="d-grid gap-2 mt-3">
      //               <button type="submit" className="btn btn-primary">
      //                 Sign Up
      //               </button>
      //             </div>
      //             <p className="text-center mt-2">
      //               Forgot <a href="#">Password?</a>
      //             </p>
      //           </div>
      //         </form>
      //       </div>
      //     );
      //   }

      //   return (
      //     <div className="Auth-form-container">
      //       <form className="Auth-form">
      //         <div className="Auth-form-content">
      //           <h3 className="Auth-form-title">Sign Up</h3>
      //           <div className="text-center">
      //             Already registered?{" "}
      //             <span className="link-primary" onClick={changeAuthMode}>
      //               Sign Up
      //             </span>
      //           </div>
      //           <div className="form-group mt-3">
      //             <label>Full Name</label>
      //             <input
      //               type="email"
      //               className="form-control mt-1"
      //               placeholder="e.g Jane Doe"
      //             />
      //           </div>
      //           <div className="form-group mt-3">
      //             <label>Email address</label>
      //             <input
      //               type="email"
      //               className="form-control mt-1"
      //               placeholder="Email Address"
      //             />
      //           </div>
      //           <div className="form-group mt-3">
      //             <label>Password</label>
      //             <input
      //               type="password"
      //               className="form-control mt-1"
      //               placeholder="Password"
      //             />
      //           </div>
      //           <div className="d-grid gap-2 mt-3">
      //             <button type="submit" className="btn btn-primary">
      //               Sign Up
      //             </button>
      //           </div>
      //           <p className="text-center mt-2">
      //             Forgot <a href="#">password?</a>
      //           </p>
      //         </div>
      //       </form>
      //     </div>
      //   <form>
      //     <h3>Sign In</h3>
      //     <div className="mb-3">
      //       <label>Email address</label>
      //       <input
      //         type="email"
      //         className="form-control"
      //         placeholder="Enter email"
      //       />
      //     </div>
      //     <div className="mb-3">
      //       <label>Password</label>
      //       <input
      //         type="password"
      //         className="form-control"
      //         placeholder="Enter password"
      //       />
      //     </div>
      //     <div className="mb-3">
      //       <div className="custom-control custom-checkbox">
      //         <input
      //           type="checkbox"
      //           className="custom-control-input"
      //           id="customCheck1"
      //         />
      //         <label className="custom-control-label" htmlFor="customCheck1">
      //           Remember me
      //         </label>
      //       </div>
      //     </div>
      //     <div className="d-grid">
      //       <button type="submit" className="btn btn-primary">
      //         Submit
      //       </button>
      //     </div>
      //     <p className="forgot-password text-right">
      //       Forgot <a href="#">password?</a>
      //     </p>
      //   </form>
      // );
      <div className="Auth-form-container">
        <form className="Auth-form">
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Add The Username</label>
            <input
              type="username"
              className="form-control"
              placeholder="Enter username"
            />
          </div>
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
          <Link href="/signin" className="forgot-password text-right">
            Login here!
          </Link>
        </form>
      </div>
    );
  }
}
