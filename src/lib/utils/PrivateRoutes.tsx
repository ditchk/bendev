import useUserContext from "@/context/useUserContext";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const { isAuthenticated }  = useUserContext()
    return (
        <>
            {isAuthenticated ? (
                <Outlet />
            ): (
                <Navigate to={'/sign-in'} />
            )}
        </>
    )
}

export default PrivateRoutes