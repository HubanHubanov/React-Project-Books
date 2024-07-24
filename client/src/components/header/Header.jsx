
export default function Header() {
    return (
        <>
        <div class="w3-top">
                <div class="w3-bar w3-red w3-card w3-left-align w3-large">
                    <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
                    <a href="/" class="w3-bar-item w3-button w3-padding-large w3-hover-white">Home</a>
                    <a href="/auth/login" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Login</a>
                    <a href="/auth/register" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Register</a>
                    <a href="/auth/logout" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Logout</a>
                    <a href="/books/catalog" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Catalog</a>
                    <a href="/books/create" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Create</a>
                </div>
         </div>

        </>
    );
}