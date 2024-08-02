export default function BookEdit() {
    return (
        <section id="editBook">
        <h2>Edit book</h2>
        <form id="formEditBook">
            <label htmlFor="title">Book name:</label>
            <input type="text" id="title" name="title" placeholder="Book name" />
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" placeholder="Author name" />
            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" name="genre" placeholder="Genre" />
            <label htmlFor="pages">Number of pages:</label>
            <input type="number" id="pages" name="pages" placeholder="Number of pages" />
            <label htmlFor="published">Year published:</label>
            <input type="number" id="published" name="published" placeholder="Year published" />
            <label htmlFor="imageUrl">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="https://..." />
            <label htmlFor="description">Book Description:</label>
            <textarea placeholder="Description" ></textarea>

            <input type="submit" className="create" value="Add" />
        </form>
    </section>
    );
}