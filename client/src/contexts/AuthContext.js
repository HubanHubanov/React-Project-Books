import { createContext } from "react";


export const AuthContext = createContext({
    userId: "",
    email: "",
    accesToken: "",
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});