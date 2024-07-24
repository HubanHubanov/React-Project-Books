export default function Edit() {
    return (
        <section id="editBook">
        <h2>Edit book</h2>
        <form id="formEditBook">
            <label htmlFor="book">Book name:</label>
            <input type="text" id="book" name="book" placeholder="Book name" />
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" placeholder="Author name" />
            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" name="genre" placeholder="Genre" />
            <label htmlFor="pages">Number of pages:</label>
            <input type="number" id="pages" name="pages" placeholder="Number of pages" />
            <label htmlFor="pages">Year published:</label>
            <input type="number" id="year" name="year" placeholder="Year published" />
            <label htmlFor="imgUrl">Image:</label>
            <input type="text" id="imgUrl" name="imgUrl" placeholder="https://..." />
            <label for="description">Book Description:</label>
            <textarea placeholder="Description" ></textarea>

            <input type="submit" class="create" value="Add" />
        </form>
    </section>
    );
}