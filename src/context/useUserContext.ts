import { useContext } from "react";
import AuthContext from "./Authcontext";

const useUserContext = () => {
    const data = useContext(AuthContext);
    
    return data;
}

export default useUserContext;