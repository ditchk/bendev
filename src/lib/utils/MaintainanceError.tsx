import { Outlet, Navigate } from "react-router-dom";

const MaintainanceError = () => {
    const user = false
    return user ? <Outlet/> : <Navigate to={'/maintainance'} />
}

export default MaintainanceError