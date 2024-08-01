import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <div className="w3-top">
                <div className="w3-bar w3-red w3-card w3-left-align w3-large">
                    <Link className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" to="javascript:void(0);" onClick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></Link>
                    <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-hover-white">Home</Link>
                    <Link to="/auth/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Login</Link>
                    <Link to="/auth/register" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Register</Link>
                    <Link to="/auth/logout" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Logout</Link>
                    <Link to="/books/catalog" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Catalog</Link>
                    <Link to="/books/create" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Create</Link>
                </div>
         </div>

        </>
    );
}