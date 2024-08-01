import { useNavigate } from "react-router-dom";

import { useCreateBook } from "../../hooks/useBooks";
import useForm from "../../hooks/useForm";
import styles from "./BookCreate.module.css"

const initialValues = {
    title: "",
    author: "",
    genre: "",
    pages: "",
    piblished: "",
    imageUrl: "",
    description: ""
}

export default function BookCreate() {
    const navigate = useNavigate();
    const createBook = useCreateBook();

    const createHandler = async (values) => {
        createBook(values);
        try {
            const createdBook = await createBook(values)
            navigate(`/books//${createdBook._id}/details`)
        } catch (err) {
            console.log(err.message);
        }
    }

    const {values, changeHandler, submitHandler} = useForm(initialValues, createHandler);

    return (
   
           <section id="addBook">
        {/* <section className={styles["addBook"]}> */}
            <h2>Add new book</h2>
            <form id="formAddBook" onSubmit={submitHandler}>
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
                    name="piblished" 
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
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={values.description}
                    onChange={changeHandler}   
                ></textarea>

                <input type="submit" className="create" value="Add" />
            </form>
        </section>
    
    );
}