import { Link } from "react-router-dom";
import styles from "../footer/Footer.module.css"

export default function Footer() {
    return (
        <footer className="w3-container w3-padding-64 w3-center w3-opacity" > 
            <div className="w3-xlarge w3-padding-32">
                <p>© 2024</p>
                <p>All rights reserved</p>
                <p>Page Created by Huban Hubanov</p>
                    <Link to="https://softuni.bg" target="_blank">SoftUni</Link>
            </div>
        </footer>
    );
}

<div>© 2020
<a to="https://softuni.bg">SoftUni</a>
<p>Created by Huban Hubanov</p>
</div>