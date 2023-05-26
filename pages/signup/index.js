import React, { useEffect, useState } from "react";
import Image from "next/image";
import kl from "../../public/kalenderbaru.png";
import pb from "../../config/pocketbase";
import { useRouter } from "next/router";

export default function signup(props) {
  const router = useRouter();

  useEffect(() => {
    if (pb.authStore.isValid) {
      router.push("/home");
    }
  }, [pb.authStore.isValid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      passwordConfirm: event.target.passwordConfirm.value,
    };

    await pb.collection("users").create(data);
    router.push("/signin");
  };

  return (
    <div className="flex h-screen p-10 bg-slate-400">
      <div className="w-1/2 flex justify-center items-center bg-sky-950 rounded-2xl">
        <Image src={kl} width={500} height={1000} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="card flex-shrink-0 w-1/2 shadow-2xl bg-white"
      >
        <div className="card-body w-full flex justify-center">
          <h1 className="text-4xl font-bold text-black text-center">Sign up</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered bg-white text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              placeholder="Email"
              name="email"
              type="email"
              className="input input-bordered bg-white text-black"
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered bg-white text-black"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Confirm Password</span>
              </label>
              <input
                name="passwordConfirm"
                type="password"
                placeholder="Confirm password"
                className="input input-bordered bg-white text-black"
              />
            </div>
            <label className="label">
              <a
                href="/signin"
                className="label-text-alt link link-hover text-black"
              >
                {" "}
                have an account? Sign in
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <a href="/signin">
              <button className="btn w-full bg-sky-950 text-white">
                Sign up
              </button>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
