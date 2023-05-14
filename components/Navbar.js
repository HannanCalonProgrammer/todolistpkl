import Image from "next/image";
import { BiSearch } from "react-icons/bi";

export default function Navbar(){
    return <div className="navbar bg-black">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl text-white">Daily App</a>
    </div>
    <div><input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs mr-96" />
      <BiSearch />
      </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image src={`/LOGO.png`} alt="" width="40" height="40" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
}