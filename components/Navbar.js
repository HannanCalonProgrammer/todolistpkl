import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import pb from "../config/pocketbase";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl ">Daily App</a>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs mr-96"
        />
        <BiSearch />
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
