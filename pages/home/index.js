

import Header from "../../components/Header"
import Navbar from "../../components/navbar"
import Tabel from "../../components/Tabel"
import Footer from "../../components/Footer"

export default function home() {
  return(
    
    <>
      <Navbar />
      <div className="flex w-screen">
    <Header/>
    <Tabel/>

      </div>
    <Footer/>
    </>
  )
}
