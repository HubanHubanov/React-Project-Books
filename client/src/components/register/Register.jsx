export default function Register() {
    return (
        <section id="register">
        <h2>Create your account:</h2>
        <form id="formRegister">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" />
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" />
            <label for="rePassword">Repeat Password:</label>
            <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
            <input type="submit" className="register" value="Register" />
        </form>
    </section>
    );
}