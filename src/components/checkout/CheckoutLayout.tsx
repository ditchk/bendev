import { Outlet } from "react-router"

const CheckoutLayout = () => {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
        <div className="hidden lg:flex w-1/2 h-full animate-in slide-in-from-left-14 duration-1000">
            <img src="/assets/images/checkout.jpg" alt="" width={700} />
        </div>
        <div className="hidden md:flex w-[1px] h-full bg-slate-300" />
        <div className="flex flex-1 h-full w-1/2">
            <Outlet />
        </div>
    </div>
  )
}

export default CheckoutLayout
