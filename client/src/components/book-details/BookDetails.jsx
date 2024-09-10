import { Link, useNavigate, useParams} from "react-router-dom";

import styles from "./BookDetails.module.css";
import { useGetOneBook } from "../../hooks/useBooks";
import { useCreateComment, useGetAllComments} from "../../hooks/useComments";
import useForm from "../../hooks/useForm"
import { useAuthContext } from "../../contexts/AuthContext";

const initialValues = {
    comment: "",
    email: ""
}

export default function BookDetails() {
    const {bookId} = useParams();
    const [comments, setComments] = useGetAllComments(bookId); 
    const createComment = useCreateComment();
    const [book] = useGetOneBook(bookId);
    const {isAuthenticated, email, userId} = useAuthContext()

    const {values, 
        changeHandler, 
        submitHandler
        } = useForm(initialValues, async ({comment}) => {
            try {
              const newComment = await createComment(bookId, comment, email);
              
              setComments(oldComments => [...oldComments, newComment]);
                
            } catch (err) {
                console.log(err.message);
            }
    });
        
        const isOwner = userId === book?._ownerId;

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
                            {comments.map(comment => (
                                <p className={styles["comments-part"]} key={book._id}>{comment.email}: {comment.text}</p>
                        ))}          
                            {comments.length === 0 && <p>No Comments for this Book</p>}   
                    </div>

                </div>

                 {/* <div className={styles["buttons"]}> */}
                    {isOwner && (
                         <div className={styles["author"]}>
                             <div>
                                <Link to={`/book/${bookId}/edit`} className={styles["btn-edit"]}>Edit</Link>
                            </div>
                            <div>
                                <Link to={`/book/${bookId}/delete`}  className={styles["btn-delete"]}>Delete</Link>
                            </div> 
                     </div>
                     
                    )}
                     
                {/* </div>   */}

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