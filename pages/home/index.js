import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Tabel from "../../components/Tabel";
import Footer from "../../components/Footer";
import pb from "../../config/pocketbase";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function home() {
  const router = useRouter();

  useEffect(() => {
    if (!pb.authStore.isValid) {
      router.push("/signin");
    }
  }, [pb.authStore.isValid]);

  return (
    <>
      <Navbar />
      <div className="flex w-screen">
        <Header />
        <Tabel />
      </div>
      <Footer />
    </>
  );
}
