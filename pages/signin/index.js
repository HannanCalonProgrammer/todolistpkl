import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import pb from "../../config/pocketbase";
import Image from "next/image";
import kl from "../../public/kalenderbaru.png"

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
   <div className="flex h-screen p-10 bg-slate-400">
    <div className="w-1/2 flex justify-center items-center bg-sky-950 rounded-2xl">
    <Image src={kl} width={500} height={1000}/>
    </div>
    <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-white">
      <div className="card-body w-full flex justify-center">
      <h1 className="text-4xl font-bold text-black text-center">Sign in</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered bg-white text-black" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered bg-white text-black" />
          <label className="label">
            <a href="/signup" className="label-text-alt link link-hover text-black">Don't have an account? Sign up</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <a href="/home">
          <button className="btn w-full bg-sky-950 text-white">Sign in</button>
          </a>
        </div>
      </div>
    </div>
    </div>
    // <div className="Auth-form-container">
    //   <form
    //     className="Auth-form"
    //     onSubmit={(e) => {
    //       e.preventDefault();
    //       handleLogin();
    //     }}
    //   >
    //     <h3>Sign In</h3>
    //     <div className="mb-3">
    //       <label>Email address</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         className="form-control"
    //         placeholder="Enter email"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Password</label>
    //       <input
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
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
    //     <Link href="/signup" className="forgot-password text-right">
    //       Register here!
    //     </Link>
    //   </form>
    // </div>
  );
}
