
import styles from "./BookLatest.module.css"


import { useGetAllBooks } from "../../hooks/useBooks";
import BookLatestItem from "./book-latest-item/BookLatestItem";

export default function BookLatest() {
    const [books] = useGetAllBooks()

    return (
        <div className={styles["background"]}>
            <div className={styles["row"]}>
                <section id="viewCatalog" className="background-img">

                    {books.length > 0
                        ? books.map(book => <BookLatestItem key={book._id} {...book}/>)
                        : <div className={styles["no-books"]}>There are no Books</div>
                    }
                        
                </section>
            </div>
        </div>
    );
}