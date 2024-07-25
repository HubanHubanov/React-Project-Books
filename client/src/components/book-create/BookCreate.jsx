import styles from "./BookCreate.module.css"

export default function BookCreate() {
    return (
   
           <section id="addBook">
        {/* <section className={styles["addBook"]}> */}
            <h2>Add new book</h2>
            <form id="formAddBook">
                <label htmlFor="title">Book name:</label>
                <input type="text" id="title" name="title" placeholder="Book name" />
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" placeholder="Author name" />
                <label htmlFor="genre">Genre:</label>
                <input type="text" id="genre" name="genre" placeholder="Genre" />
                <label htmlFor="pages">Number of pages:</label>
                <input type="number" id="pages" name="pages" placeholder="Number of pages" />
                <label htmlFor="published">Year published:</label>
                <input type="number" id="published" name="piblished" placeholder="Year published" />
                <label htmlFor="imageUrl">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="https://..." />
                <label for="description">Book Description:</label>
                <textarea placeholder="Description" ></textarea>

                <input type="submit" class="create" value="Add" />
            </form>
        </section>
    
    );
}