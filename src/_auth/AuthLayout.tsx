
import useUserContext from "@/context/useUserContext"
import { Navigate, Outlet } from "react-router"

export default function AuthLayout() {
    const { isAuthenticated } = useUserContext()
    
    return (
        <>
            {isAuthenticated ? (
                <Navigate to={'/opportunities&careers'} />
            ) : (
                <div className="flex flex-col justify-center items-center w-full min-h-screen">
                    <main className="flex justify-center items-center h-full w-full">
                        <Outlet />
                    </main>
                </div>
            )}
        </>
    )
}