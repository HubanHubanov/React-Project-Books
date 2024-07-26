import { Link, useParams } from "react-router-dom";
import { useEffect,  useState } from "react";

import styles from "./BookDetails.module.css"
import { getOne } from "../../services/booksService";

export default function BookDetails() {
    const [book, setBook] = useState({});
    const {bookId} = useParams()
  
    useEffect(() => {
        (async () => {
            const result = await getOne(bookId)
            setBook(result)
        })();
        console.log("useEffect");
    }, []); 
    
    return (
    <main>
        <section className={styles["details-info"]}>
            <div className="book-image">
                <img src={book.imageUrl} />
            </div>

            <div className="book-info">
                <div className="volcano-text">
                    <h1 id="name">{book.title}</h1>
                    <h3 id="author">Author: {book.author}</h3>
                    <p id="genre">Genre: Sci-fi</p>
                    <p id="pages"><span>Number of pages: {book.pages}</span></p>
                    <p id="published">Year published: {book.published}</p>
                    <p id="description">{book.description}</p>
                </div>
                <div className="product-btn">
                    <div className="author">
                        <Link to="#" className="btn-edit">Edit</Link>
                        <Link to="#" className="btn-delete">Delete</Link>
                    </div>

                    <Link to="#" className="btn-vote">Vote</Link>
                    
                    <p className="vote-message">You've already voted for this book!</p>
                </div>
            </div>
        </section>
    </main>
    );
}