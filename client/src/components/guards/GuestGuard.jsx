import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function GuestGuard({children}) {
    const {isAuthenticated} = useAuthContext();

    if(!isAuthenticated) {
        return <Navigate to="/auth/login" />
    }

    return <Outlet />
}

