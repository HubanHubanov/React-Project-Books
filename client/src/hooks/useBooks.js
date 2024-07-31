import { useEffect, useState } from "react";
import * as booksService from "../services/booksService"

export function useGetAllBooks () {
    const [books, setBooks] = useState([])

    useEffect(() => {
        (async () => {
             const allBooks = await booksService.getAll();
             setBooks(allBooks);
            
        })()
         
     }, []);

     return [books, setBooks]
}


