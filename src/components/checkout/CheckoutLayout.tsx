import { Outlet } from "react-router"
import Navbar from "../shared/Navbar"
import Footer from "../shared/Footer"

const CheckoutLayout = () => {
  return (
    <>
    <Navbar />
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="hidden lg:flex w-1/2 h-fit overflow-hidden">
            <img src="/assets/images/checkout.jpg" alt="" width={600} />
        </div>
        <div className="flex flex-col w-full justify-center items-center h-fit p-2 md:p-5 mt-12 lg:w-1/2">
            <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CheckoutLayout
