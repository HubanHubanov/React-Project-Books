import { useEffect, useState } from "react";

import * as booksService from "../../services/booksService"
import styles from "./BookCatalog.module.css"

import BookCatalogItem from "./book-catalog-item/BookCatalogItem";

export default function BookCatalog() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        (async () => {
             const allBooks = await booksService.getAll();
             setBooks(allBooks);
            
        })()
         
     }, []);

    // useEffect(() => {
    //     booksService.getAll()
    //         .then(allBooks => setBooks(allBooks));
    // }, []);
    return (
        <>
          <div className={styles["background"]}>
        <div className={styles["row"]}>
        <section id="viewCatalog" className="background-img">

            {books.length > 0
                ? books.map(book => <BookCatalogItem key={book._id} {...book}/>)
                : <div className={styles["no-books"]}>There are no Books</div>
            }

             
        </section>
        </div>

        </div>
     
        </>
    );
}