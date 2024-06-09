import Homepageloader from "@/components/loaders/Homepageloader";
import { AuthProvider } from "@/context/Authcontext";
import useUserContext from "@/context/useUserContext";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
    const { isAuthenticated, isLoading }  = useUserContext()
    const navigate = useNavigate()

    if(!isAuthenticated) {
        navigate('/sign-in', {replace: true})
    }

   return (
        <AuthProvider>
            {!isLoading ? (
                <Homepageloader />
            ):(
                <div className="h-full w-full z-0">
                    <Outlet />
                </div>
            )}
        </AuthProvider>
    )
}

export default PrivateRoutes