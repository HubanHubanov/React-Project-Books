
import styles from "./BookCatalog.module.css"

import BookCatalogItem from "./book-catalog-item/BookCatalogItem";
import { useGetAllBooks } from "../../hooks/useBooks";

export default function BookCatalog() {
    const [books] = useGetAllBooks();

    return (
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
    );
}