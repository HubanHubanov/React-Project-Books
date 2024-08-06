import {useNavigate} from "react-router-dom"

import { useLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import styles from "./Login.module.css"
import { useState } from "react";

const initialValues =  {email: "", password: ""}

export default function Login() {
    const [error, setError] = useState("")
    const login = useLogin();
    const navigate = useNavigate();
    
    const loginHandler = async ({email, password}) => {
        try {
           await login(email, password);
           navigate("/")
        } catch (err) {
            setError(err.message)
           console.log(err.message);
        }
       };

    const {values, changeHandler, submitHandler} = useForm(initialValues, loginHandler);

    return (
        // <section className={styles["login"]}>
        <section className={styles["login-section"]}>
            <h2>Login:</h2>
                <form onSubmit={submitHandler}>
                   
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email"
                        value={values.email} 
                        onChange={changeHandler}
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password"
                        value={values.password} 
                        onChange={changeHandler}
                    />

                    {error && (
                    <div className={styles["error"]}>
                        {error}
                    </div>
                    )}

                    <input type="submit" className={styles["login"]} value="Login" />
                </form>
        </section>

    );
}
