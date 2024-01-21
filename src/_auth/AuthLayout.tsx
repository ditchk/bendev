import { Navigate, Outlet } from "react-router"

const AuthLayout = () => {

  const isAuthenticated = false;


  return (
    <div className="flex md:flex-row justify-center items-center w-full h-screen">
      {isAuthenticated ? (
        <Navigate to={'/'} />
      ): (
        <>
          <div className="hidden md:flex flex-1 bg-black">
          <img src="/assets/images/loginad.jpg" alt="logo" className="hidden xl:block h-screen w-full object-cover bg-no-repeat filter grayscale contrast-150 ..." />
          </div>
          <div className="flex flex-1 justify-center items-center w-fit h-fit">
            <Outlet />
          </div>
        </>
      )}
    </div>
  )
}

export default AuthLayout
