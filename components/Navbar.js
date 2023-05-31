import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import pb from "../config/pocketbase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const getMyTasks = async () => {
    const records = await pb.collection("tasks").getFullList({
      sort: "-created",
      filter: `user = "${pb.authStore.model.id}" && judul ~ "${input}"`,
    });

    setTasks(records);
  };

  useEffect(() => {
    getMyTasks();
  }, [input]);

  return (
    <div className="navbar ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl ">Daily App</a>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input input-bordered w-full max-w-xs mr-96"
        />
        <BiSearch />
        {open && (
          <ul className="menu mt-28 max-w-xs  w-full rounded-box absolute z-50 bg-base-100 border">
            {tasks.map((task) => (
              <li>
                <a>{task.judul}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={`/LOGO.png`} alt="" width="40" height="40" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button
                onClick={() => {
                  pb.authStore.clear();
                  router.push("/signin");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
