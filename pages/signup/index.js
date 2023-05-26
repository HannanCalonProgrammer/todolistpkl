import Link from "next/link";
import React, { useState } from "react";
import PocketBase from "pocketbase";
import Image from "next/image";
import kl from "../../public/kalenderbaru.png"
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
      <div className="flex h-screen p-10 bg-slate-400">
    <div className="w-1/2 flex justify-center items-center bg-sky-950 rounded-2xl">
    <Image src={kl} width={500} height={1000}/>
    </div>
    <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-white">
      <div className="card-body w-full flex justify-center">
      <h1 className="text-4xl font-bold text-black text-center">Sign up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Username</span>
          </label>
          <input type="text" placeholder="Username" className="input input-bordered bg-white text-black" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="text" placeholder="Email" className="input input-bordered bg-white text-black" />
          <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered bg-white text-black" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm password" className="input input-bordered bg-white text-black" />
        </div>
          <label className="label">
            <a href="/signin" className="label-text-alt link link-hover text-black"> have an account? Sign in</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-sky-950 text-white">Sign up</button>
        </div>
      </div>
    </div>
    </div>
      // <div className="Auth-form-container">
      //   <form className="Auth-form" onSubmit={handleSubmit}>
      //     <h3>Sign Up</h3>
      //     <div className="mb-3">
      //       <label>Add The Username</label>
      //       <input
      //         name="username"
      //         type="text"
      //         className="form-control"
      //         placeholder="Enter username"
      //       />
      //     </div>
      //     <div className="mb-3">
      //       <label>Email address</label>
      //       <input
      //         name="email"
      //         type="email"
      //         className="form-control"
      //         placeholder="Enter email"
      //       />
      //     </div>
      //     <div className="mb-3">
      //       <label>Password</label>
      //       <input
      //         name="password"
      //         type="password"
      //         className="form-control"
      //         placeholder="Enter password"
      //       />
      //     </div>
      //     <div className="mb-3">
      //       <label>Confirm Password</label>
      //       <input
      //         name="passwordConfirm"
      //         type="password"
      //         className="form-control"
      //         placeholder="Enter password"
      //       />
      //     </div>
      //     <div className="d-grid">
      //       <button type="submit" className="btn btn-primary">
      //         Submit
      //       </button>
      //     </div>
      //     <Link href="/signin" className="forgot-password text-right">
      //       Login here!
      //     </Link>
      //   </form>
      // </div>
    );
  }
}
