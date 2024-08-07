import { Navigate, useNavigate, useParams } from "react-router-dom";
import * as booksService from "../../services/booksService"

export default function BookDelete() {
    const {bookId} = useParams();
    const navigate = useNavigate();



    ( async ()=> {
        try {
            const response = await booksService.del(bookId);
            navigate("/book/catalog")

         } catch (err) {
             console.log(err.mesage);
             
         }
    })();
    

     <Navigate to="/" />
}