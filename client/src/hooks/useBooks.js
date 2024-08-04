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


export function useGetOneBook (bookId) {
    const [book, setBook] = useState({});

    useEffect(() => {
        (async () => {
           const result = await booksService.getOne(bookId)
           
            setBook(result)
        })();
    }, [bookId]); 

    return [
        book,   
        setBook
    ]
}

export function useCreateBook () {
    const bookCreateHandler = async (bookData) => {
      const createdBook = await booksService.create(bookData)
      
       
       return createdBook
    }
    return bookCreateHandler;
}



