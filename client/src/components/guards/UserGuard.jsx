import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function UserGuard({children}) {
    const {isAuthenticated} = useAuthContext();

    if(isAuthenticated) {
        return <Navigate to="/" />
    }

    return <Outlet />

}
