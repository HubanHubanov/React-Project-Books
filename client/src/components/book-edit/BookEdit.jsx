import { useNavigate, useParams } from "react-router-dom";
import styles from "./BookEdit.module.css"

import useForm from "../../hooks/useForm";
import { useGetOneBook } from "../../hooks/useBooks";
import * as bookService from "../../services/booksService";

export default function BookEdit() {
    const {bookId} = useParams();
    const navigate = useNavigate();
    const [book] = useGetOneBook(bookId);
     
    const {values,
        changeHandler,
        submitHandler,
    } = useForm(book, async (values) => {
        const updatedBook = await bookService.update(bookId, values);
        // setBook(updatedBook);
        // const isConfirmed = confirm("Sure???????");
        // if(!isConfirmed) {
        //     return;
        // }
        navigate(`/book/${bookId}/details`);
    });

    return (
        <section id="editBook">
        <h2>Edit book</h2>
        <form id="formEditBook" onSubmit={submitHandler}>
            <label htmlFor="title">Book name:</label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder="Book name"
                value={values.title} 
                onChange={changeHandler}
            />
            <label htmlFor="author">Author:</label>
            <input 
                type="text" 
                id="author" 
                name="author" 
                placeholder="Author name"
                value={values.author} 
                onChange={changeHandler} 
            />
            <label htmlFor="genre">Genre:</label>
            <input 
                type="text" 
                id="genre" 
                name="genre" 
                placeholder="Genre" 
                value={values.genre} 
                onChange={changeHandler}
            />
            <label htmlFor="pages">Number of pages:</label>
            <input 
                type="number" 
                id="pages" 
                name="pages" 
                placeholder="Number of pages" 
                value={values.pages} 
                onChange={changeHandler}
            />
            <label htmlFor="published">Year published:</label>
                <input 
                type="number" 
                id="published" 
                name="published" 
                placeholder="Year published"
                value={values.published} 
                onChange={changeHandler} 
            />
            <label htmlFor="imageUrl">Image:</label>
            <input 
                type="text" 
                id="imageUrl" 
                name="imageUrl" 
                placeholder="https://..." 
                value={values.imageUrl} 
                onChange={changeHandler}
            />
            <label htmlFor="description">Book Description:</label>
            <textarea 
                name="description"
                placeholder="Description"
                value={values.description}
                onChange={changeHandler} 
            ></textarea>

            <input type="submit" className={styles["edit"]} value="Edit" />
        </form>
    </section>
    );
}