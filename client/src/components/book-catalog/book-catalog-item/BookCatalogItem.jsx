import styles from "../../book-catalog/BookCatalog.module.css"

export default function BookCatalogItem({
    title,
    pages,
    imageUrl
}) {
    return (
        <div className={styles["column"]}>
                <a href="" className="added-book">
                    <img src={imageUrl} a />
                    <h3>{title}</h3>
                    <h4>Number of pages: {pages}</h4>
                </a>
                </div>
    );
}