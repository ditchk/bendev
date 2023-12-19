import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const user = false
    return user ? <Outlet/> : <Navigate to={'/auth/signin'} />
}

export default PrivateRoutes