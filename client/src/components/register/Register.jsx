import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Register.module.css"
import { useRegister } from "../../hooks/useAuth"; 
import useForm from "../../hooks/useForm";

const initialValues = {email: "", password: "", rePassword: ""};

export default function Register() {
    const [error, setError] = useState("");
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({email, password, rePassword}) => {
        if(password !== rePassword) {
            return setError("Password and re-password don't match");
        }

        try {
            await register(email, password);
            navigate("/")
        } catch (err) {
            setError(err.message)
            console.log(err.message);
        }
    };

    const {values, changeHandler, submitHandler} = useForm(initialValues, registerHandler);

    return (
        <section id="register" className={styles["register-section"]}> 
        <h2>Create your account:</h2>
        <form id="formRegister" onSubmit={submitHandler}>
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
                placeholder="Password"
                value={values.password}
                onChange={changeHandler} 
            />
            <label htmlFor="rePassword">Repeat Password:</label>
            <input 
                type="password" 
                id="rePassword" 
                name="rePassword" 
                placeholder="Repeat Password"
                value={values.rePassword}
                onChange={changeHandler}  
            />

            {error && (
               <div className={styles["error"]}>
                {error}
               </div>
            )}

            <input type="submit" className={styles["register"]} value="Register" />
        </form>
    </section>
    );
}