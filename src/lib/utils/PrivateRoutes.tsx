import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const user = true
    return user ? <Outlet/> : <Navigate to={'/error'} />
}

export default PrivateRoutes