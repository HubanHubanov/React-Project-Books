
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
                <Link to={`/book/${_id}/details`} className="details-link">
                    <img src={imageUrl} />
                    <h3>{title}</h3>
                    <p className={styles["pages"]}>Number of pages: {pages}</p>
                    <p className={styles["details-button"]}>Details</p>
                </Link>
        </div>
    );  
}