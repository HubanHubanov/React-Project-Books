import { useContext } from "react";

import { login, register } from "../services/authService"
import { AuthContext } from "../contexts/AuthContext";

export const useLogin  = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const {password: _, ...loginData} = await login(email, password);

        changeAuthState(loginData);

        return loginData

    }
        return loginHandler;
}

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        const {password: _, ...registerData} = await register(email, password);
        changeAuthState(registerData);

        return registerData

    }
        return registerHandler;
}   