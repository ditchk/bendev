import useUserContext from "@/context/useUserContext";
import { useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
    const { isAuthenticated }  = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        const cookieFallback = localStorage.getItem("cookieFallback");
        if (
          cookieFallback === "[]" ||
          cookieFallback === null ||
          cookieFallback === undefined
        ) navigate("/sign-in");
    
      }, [navigate]);

    if(!isAuthenticated) {
        <Navigate to={'/sign-in'} />
    } else {
        <>
            <Outlet />
        </>
    }
}

export default PrivateRoutes