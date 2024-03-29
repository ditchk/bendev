import { Outlet, Navigate } from "react-router-dom";

const MaintainanceError = () => {
    const active = true
    return active ? <Outlet/> : <Navigate to={'/maintainance'} />
}

export default MaintainanceError