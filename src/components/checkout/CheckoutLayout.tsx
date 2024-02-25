import { Outlet } from "react-router"

const CheckoutLayout = () => {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
        <div className="hidden lg:flex flex-1 w-full h-full animate-in slide-in-from-left-14 duration-1000 bg-black">
            <img src="/assets/images/checkout.jpg" alt="" width={700} />
        </div>
        <div className="hidden md:flex w-[1px] h-full bg-black" />
        <div className="flex flex-1 h-full w-full">
            <Outlet />
        </div>
    </div>
  )
}

export default CheckoutLayout
