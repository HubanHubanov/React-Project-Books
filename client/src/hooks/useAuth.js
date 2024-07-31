import { useContext } from "react";

import { login } from "../services/authService"
import { AuthContext } from "../contexts/authContext";

export const useLogin  = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
      
        const result = await login(email, password);

        changeAuthState(result);
    }

    return loginHandler;
}