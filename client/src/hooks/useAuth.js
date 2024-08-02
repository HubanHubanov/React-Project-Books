import { useAuthContext } from "../contexts/AuthContext";

import { login, register } from "../services/authService"

export const useLogin  = () => {
    const {changeAuthState} = useAuthContext();

    const loginHandler = async (email, password) => {
        const {password: _, ...loginData} = await login(email, password);

        changeAuthState(loginData);
        
        return loginData

    }
        return loginHandler;
}

export const useRegister = () => {
    const {changeAuthState} = useAuthContext();

    const registerHandler = async (email, password) => {
        const {password: _, ...registerData} = await register(email, password);
        changeAuthState(registerData);

        return registerData

    }
        return registerHandler;
}   