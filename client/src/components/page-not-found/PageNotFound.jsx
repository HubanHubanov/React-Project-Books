import styles from "./PageNotFound.module.css"

export default function PageNotFound() {
    return (
        <>
            <div className={styles["not-found"]}>
                <p>404</p>
            </div>

            <div className={styles["not-found-message"]}>
            <   p>The page you are looking for can not be found</p>
            </div>
        </>

    

    );
}