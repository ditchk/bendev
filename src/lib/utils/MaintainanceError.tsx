import { Outlet, Navigate } from "react-router-dom";

const MaintainanceError = () => {
    const active = false
    return active ? <Outlet/> : <Navigate to={'/maintainance'} />
}

export default MaintainanceError