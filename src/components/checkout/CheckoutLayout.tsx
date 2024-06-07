import { Outlet } from "react-router"
import Navbar from "../shared/Navbar"
import Footer from "../shared/Footer"

const CheckoutLayout = () => {
  return (
    <>
    <Navbar />
      <div className="flex flex-row justify-center items-center w-full h-screen">
        <div className="hidden lg:flex w-1/2 h-fit overflow-hidden border-r-2 border-slate-300 duration-1000">
            <img src="/assets/images/checkout.jpg" alt="" width={600} />
        </div>
        <div className="flex flex-col w-full justify-center items-center h-full p-3 mt-4 lg:w-1/2">
            <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CheckoutLayout
