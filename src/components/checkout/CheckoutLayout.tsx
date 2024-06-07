import { Outlet } from "react-router"
import Navbar from "../shared/Navbar"
import Paymentm from "../payment-methods/Paymentm"

const CheckoutLayout = () => {
  return (
    <>
    <Navbar />
      <div className="flex flex-row justify-center items-center w-full h-screen">
        <div className="hidden lg:flex w-1/2 h-fit border-r-2 border-slate-300 duration-1000">
            <img src="/assets/images/checkout.jpg" alt="" width={700} />
        </div>
        <div className="flex flex-col w-full justify-center items-center h-full p-3 lg:w-1/2">
            <Outlet />
        </div>
      </div>
      <Paymentm />
    </>
  )
}

export default CheckoutLayout
