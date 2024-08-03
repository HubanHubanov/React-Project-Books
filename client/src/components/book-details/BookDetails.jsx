import { useParams} from "react-router-dom";

import styles from "./BookDetails.module.css";
import { useGetOneBook } from "../../hooks/useBooks";
import { useCreateComment, useGetAllComments} from "../../hooks/useComments";
import useForm from "../../hooks/useForm"
import { useAuthContext } from "../../contexts/AuthContext";

const initialValues = {
    comment: ""
}

export default function BookDetails() {
    const {bookId} = useParams();
    const [comments, setComments] = useGetAllComments(bookId); 
    const createComment = useCreateComment();
    const [book] = useGetOneBook(bookId);
    const {isAuthenticated} = useAuthContext()

    const {values, 
        changeHandler, 
        submitHandler
        } = useForm(initialValues, async ({comment}) => {
            try {
              const newComment = await createComment(bookId, comment);
              
              setComments(oldComments => [...oldComments, newComment]);
                
              
            } catch (err) {
                console.log(err.message);
                //TODO: Show err message on the screen
            }
    })

    return (
        <section className={styles["details-info"]}>
            <div className="book-image">
                <img src={book.imageUrl} />
            </div>

            <div className={styles["book-info"]}>
                <div>
                    <h1 id="name">{book.title}</h1>
                    <h3 id="author">Author: {book.author}</h3>
                    <p id="genre">Genre: {book.genre}</p>
                    <p id="pages"><span>Number of pages: {book.pages}</span></p>
                    <p id="published">Year published: {book.published}</p>
                    <label htmlFor="description" className={styles["description"]}>Description:</label>
                    <p id="description" >{book.description}</p>
                    
                    <div>
                        <h2>Comments:</h2>
                    
                        <ul >                            

                        {comments.map(comment => (
                            <li key={comment._id}>
                            <p>Username: {comment.text}</p>
                            </li>
                        ))}          
                           
                        {comments.length === 0 && <p>No Comments for this Book</p>}
                       

                      
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

                {isAuthenticated && (
                    <div className={styles["comment-form"]}>
                    <h2>Add a Comment</h2>
                    <form method="post" onSubmit={submitHandler}>
                        
                        <label htmlFor="comment">Comment</label>
                        <textarea 
                            id="comment" 
                            name="comment" 
                            rows="5" 
                            placeholder="Comment"
                            value={values.comment}
                            onChange={changeHandler}
                        ></textarea>

                        <input className={styles["submit-comment"]} type="submit" value="Submit comment" />    
                        {/* <button type="submit">Submit Comment</button> */}
                    </form>
                </div>
                )}
                
            </div>
        </section>
    
    );
}