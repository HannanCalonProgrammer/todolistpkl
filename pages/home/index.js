import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Tabel from "../../components/Tabel";

export default function home() {
  return (
    <>
      <Navbar />
      <div className="flex w-screen">
        <Header />
        <Tabel />
      </div>
    </>
  );
}
