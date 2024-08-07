
import {Link} from "react-router-dom"

import styles from "../../book-latest/BookLatest.module.css"

export default function BookLatestItem({
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
                    <p className={styles["pages-num"]}>Number of pages: {pages}</p>
                    <p className={styles["details-button"]}>Details</p>
                </Link>
                </div>
    );
}