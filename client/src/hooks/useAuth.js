import { login } from "../services/authService"

export const useLogin  = () => {
    const loginHandler = async (email, password) => {
      
           const result = await login(email, password);

           console.log("useAuth -> useLogin -> resullt ->", result);
           //TODO: update app state
      
    
    }

    return loginHandler;
}