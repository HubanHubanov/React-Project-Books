import styles from "./BookCatalog.module.css"
import * as booksService from "../../services/booksService"
import { useEffect, useState } from "react";
import BookCatalogItem from "./book-catalog-item/BookCatalogItem";

export default function BookCatalog() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        (async () => {
             const allBooks = await booksService.getAll();
             setBooks(allBooks);
             console.log(allBooks);
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

            {books.map(book => <BookCatalogItem key={book._id} {...book}/>)}

             {/* <div className="guest">
                There are no Hotels found...
            </div> */}
        </section>
        </div>

        </div>
     
        </>
    );
}