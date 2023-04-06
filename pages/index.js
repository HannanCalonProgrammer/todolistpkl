import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "...@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todo, setTodo] = useState(null);

  const getTodo = async () => {
    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/todolist/records"
    );
    const data = await res.json();

    setTodo(data);
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>DailyApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="style.css" />
      </Head>
      <button onClick={getTodo}>DailyApp</button>
      {todo && todo.items.map((todo) => <h2>{todo.judulrencana}</h2>)}
    </>
  );
}
