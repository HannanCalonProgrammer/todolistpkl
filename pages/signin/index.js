import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import pb from "../../config/pocketbase";
import Image from "next/image";
import kl from "../../public/kalenderbaru.png";

export default function (props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (pb.authStore.isValid) {
      router.push("/home");
    }
  }, [pb.authStore.isValid]);

  async function handleLogin() {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      if (authData.token) {
        router.push("/home");
      }
    } catch (err) {
      setError(err.data.message);
    }
  }

  return (
    <div className="flex h-screen p-10 bg-slate-400">
      <div className="w-1/2 flex justify-center items-center bg-sky-950 rounded-2xl">
        <Image src={kl} width={500} height={1000} />
      </div>
      <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-white">
        <div className="card-body w-full flex justify-center">
          <h1 className="text-4xl font-bold text-black text-center">Sign in</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="input input-bordered bg-white text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="input input-bordered bg-white text-black"
            />
            {error && (
              <div className="alert alert-error shadow-lg my-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}
            <label className="label">
              <a
                href="/signup"
                className="label-text-alt link link-hover text-black"
              >
                Don't have an account? Sign up
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button
              onClick={handleLogin}
              className="btn w-full bg-sky-950 text-white"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
