import { useContext } from "react";

import { login, register } from "../services/authService"
import { AuthContext } from "../contexts/AuthContext";

export const useLogin  = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);

        changeAuthState(result);

        return result;
    }
        return loginHandler;
}

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const {password: _, ...authData} = await register(email, password);
        changeAuthState(authData);

        // return result.email;
    }
        return registerHandler;
}   