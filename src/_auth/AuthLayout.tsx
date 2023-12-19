import { Outlet } from "react-router"
import { Link } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <nav className="flex justify-start items-start p-2 w-full border-b border-slate-200">
        <Link 
        to={'/'}
        className="flex flex-row justify-center items-center gap-2" 
        >
          <img src="/assets/images/logo.png" alt="" width={50} className='ml-3'/>
          <h1 className="text-center text-xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-black to-cyan-950">BENSWORKSPACE</h1>
        </Link>
      </nav>
      <div className="flex flex-1 justify-center items-start mt-24 md:mt-0 md:items-center w-full h-fit">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
