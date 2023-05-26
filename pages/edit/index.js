import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import pb from "../../config/pocketbase";

export default function (props) {
  const router = useRouter();
  const [judulrencana, setJudulrencana] = useState("");
  const [tenggatwaktu, setTenggatwaktu] = useState("");

  if (pb.authStore.isValid) {
    router.push("/home");
  }

  async function handleLogin() {
    const record = await pb
      .collection("todolist")
      .authWithPassword(judulrencana, tenggatwaktu);

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
        <h3>Edit</h3>
        <div className="mb-3">
          <label>Judul Rencana</label>
          <input
            type="name"
            value={judulrencana}
            onChange={(e) => setJudulrencana(e.target.value)}
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label>Tenggat Waktu</label>
          <input
            value={tenggatwaktu}
            onChange={(e) => setTenggatwaktu(e.target.value)}
            type="name"
            className="form-control"
            placeholder="Enter date"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
