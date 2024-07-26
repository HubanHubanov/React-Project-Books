import { Link, useParams} from "react-router-dom";
import { useEffect,  useState } from "react";

import styles from "./BookDetails.module.css";
import * as booksService from "../../services/booksService";
import * as commentsService from "../../services/commentsService";

export default function BookDetails() {
    const [book, setBook] = useState({});
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const {bookId} = useParams()
  
    useEffect(() => {
        (async () => {
           const result = await booksService.getOne(bookId)
            setBook(result)
        })();
    }, []); 

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

       const newComment = await commentsService.create(bookId, username, comment);

       setBook(prevState => ({
        ...prevState,   
        comments: {
            ...prevState.comments,
            [newComment._id]: newComment
        }
       }));

       setUsername("");
       setComment("");
    }   
    
    return (
    
        <section className={styles["details-info"]}>
            <div className="book-image">
                <img src={book.imageUrl} />
            </div>

            <div className={styles["book-info"]}>
                <div>
                    <h1 id="name">{book.title}</h1>
                    <h3 id="author">Author: {book.author}</h3>
                    <p id="genre">Genre: Sci-fi</p>
                    <p id="pages"><span>Number of pages: {book.pages}</span></p>
                    <p id="published">Year published: {book.published}</p>
                    <label htmlFor="description" className={styles["description"]}>Description:</label>
                    <p id="description" >{book.description}</p>
                    
                    <div>
                        <h2>Comments:</h2>
                      

                        <ul >                            
                        {Object.keys(book.comments || {}).length > 0  
                           ? Object.values(book.comments).map(comment => (
                                  
                            <li key={comment._id}>
                                <p>{comment.username}: {comment.comment}</p>
                            </li>
                         ))
                         : <p>No Comments for this Book</p>
                        }
                        </ul>
                    </div>

                </div>

                {/* <div NclassNameName="product-btn">
                    <div NclassNameName="author">
                        <Link to="#" NclassNameName="btn-edit">Edit</Link>
                        <Link to="#" className="btn-delete">Delete</Link>
                    </div>

                    <Link to="#" className="btn-vote">Vote</Link>
                    
                    <p className="vote-message">You've already voted for this book!</p>
                </div> */}

                <div className={styles["comment-form"]}>
                    <h2>Add a Comment</h2>
                    <form method="post" onSubmit={commentSubmitHandler}>
                        <label htmlFor="username">Name</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Name" 
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />

                        <label htmlFor="comment">Comment</label>
                        <textarea 
                            id="comment" 
                            name="comment" 
                            rows="5" 
                            placeholder="Comment"
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                        ></textarea>

                        <input className={styles["submit-comment"]} type="submit" value="Submit comment" />    
                        {/* <button type="submit">Submit Comment</button> */}
                    </form>
                </div>
                
            </div>
        </section>
    
    );
}