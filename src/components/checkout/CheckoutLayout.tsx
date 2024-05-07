import { Outlet } from "react-router"
import Paymentm from "../payment-methods/Paymentm"
import Navbar from "../shared/Navbar"

const CheckoutLayout = () => {
  return (
    <div className="flex flex-col justify-start w-full h-screen max-h-screen items-center animate-in zoom-in-105 duration-1000">
      <Navbar />
      <div className="flex flex-row justify-center items-center w-full">
        <div className="hidden lg:flex w-1/2 h-fit border-r-2 border-slate-300 duration-1000">
            <img src="/assets/images/checkout.jpg" alt="" width={700} />
        </div>
        <div className="flex flex-col w-full overflow-x-hidden pt-14 lg:w-1/2">
            <Outlet />
            <Paymentm />
        </div>
      </div>
    </div>
  )
}

export default CheckoutLayout
