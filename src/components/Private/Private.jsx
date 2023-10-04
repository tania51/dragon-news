import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    
    const location = useLocation();
    console.log(location.pathname);
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Private;