import Head from "next/head";
import Image from "next/image";
import { Roboto } from "next/font/google";

import styles from "...@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import pb from "../config/pocketbase";
import { useRouter } from "next/router";
// import { useState } from "react";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  // const [todo, setTodo] = useState(null);

  // const getTodo = async () => {
  //   const res = await fetch(
  //     "http://127.0.0.1:8090/api/collections/todolist/records"
  //   );
  //   const data = await res.json();

  //   setTodo(data);
  //   console.log(data);
  // };

  return (
    <>
      <Head>
        <title>DailyApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        ></link>
      </Head>
      {/* <button onClick={getTodo}>Projek Kelompok 1</button>
      {todo && todo.items.map((todo) => <h2>{todo.judulrencana}</h2>)} */}
      <div className={`${styles.bg}`}>
        <div className="container">
          <div className="row ">
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <div className="col-md-6 mt-1">
              <img src="LOGO.png" alt="" width="60px" />
            </div>
            <div className="col-md-6 mt-1 ">
              <button
                type="button"
                class="btn btn-ghost-/- text-white"
                onClick={() => {
                  pb.authStore.clear();
                  router.push("/signin");
                }}
              >
                Profile
              </button>
              <button
                type="button"
                class="btn btn-ghost text-white"
                onClick={() => {
                  pb.authStore.clear();
                  router.push("/signin");
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                class="btn btn-ghost text-white"
                onClick={() => {
                  pb.authStore.clear();
                  router.push("/signin");
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
        <div className={roboto.className}>
          <div className="row justify-content-center mt-5">
            <div className="col-md-5">
              <h1 className="text-white font-weight-bold display-3 fw-bold">
                Make Your
              </h1>
              <h1 className="text-white font-weight-bold display-3 fw-bold">
                Planning
              </h1>
              <h4 className="text-white font-weight-bold display-6 fw-bold">
                You can write and list
              </h4>
              <h4 className="text-white font-weight-bold display-6 fw-bold">
                What you like
              </h4>
            </div>
            <div className="col-md-5">
              <img src="kalenderbaru.png" alt="" width="500px" />
            </div>
          </div>
        </div>
        <div className="container mt-6 ">
          <div className="row d-flex justify-content-right">
            <div class=" col-1 "></div>
            <div class=" col-2">
              <button
                type="button"
                class="btn btn-ghost text-white"
                onClick={() => {
                  pb.authStore.clear();
                  router.push("/signin");
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"
      />
    </>
  );
}
