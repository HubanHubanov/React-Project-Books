import styles from "./Login.module.css"


export default function Login() {
    return (
        
        // <section className={styles["login"]}>
        <section className="logn">
            <h2>Login:</h2>
                <form >
                    <label htmlFor="email">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                    <input type="submit" class="login" value="Login" />
                </form>
        </section>

    );
}
