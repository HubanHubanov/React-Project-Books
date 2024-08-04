import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const {isAuthenticated, email} = useAuthContext()   
    return (
        <>
        <div className="w3-top">
                <div className="w3-bar w3-red w3-card w3-left-align w3-large">
                    {/* <Link className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" to="javascript:void(0);" onClick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></Link> */}
                    <Link className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red"  title="Toggle Navigation Menu"><i className="fa fa-bars"></i></Link>
                    <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-hover-white">Home</Link>
                    <Link to="/book/catalog" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Catalog</Link>

                    {isAuthenticated 
                        ? ( 
                            <div>
                                <Link to="/book/create" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Create</Link>
                                <Link to="/auth/logout" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" >Logout</Link>
                            </div>
                        )
                        : (
                            <div>
                                <Link to="/auth/login" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Login</Link>
                                <Link to="/auth/register" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Register</Link>
                            </div>
                        )
                    }
                        <div className="w3-bar-item  w3-hide-small w3-padding-large">Hello, {email ? email : "guest"} </div>
                   
                </div>
         </div>

        </>
    );
}