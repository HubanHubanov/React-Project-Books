
import {Link} from "react-router-dom"

import styles from "../../book-catalog/BookCatalog.module.css"

export default function BookCatalogItem({
    _id,
    title,
    pages,
    imageUrl
}) {
    return (
        <div className={styles["column"]}>
                <Link to={`/books/${_id}/details`} className="details-link">
                    <img src={imageUrl} />
                    <h3>{title}</h3>
                    <h4>Number of pages: {pages}</h4>
                    <h1>Details</h1>
                </Link>
                </div>
    );
}