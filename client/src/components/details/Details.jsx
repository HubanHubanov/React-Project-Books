import styles from "./Details.module.css"

export default function Details() {
    return (
       <>
           <main>
        <section className={styles["details-info"]}>
            <div className="book-image">
                <img src="https://www.richardkmorgan.com/wp-content/uploads/altered-carbon_UK_Pb.jpg" />
            </div>

            <div className="book-info">
                <div className="volcano-text">
                    <h1 id="name">Solaris</h1>
                    <h3 id="author">Author: Stanislav Lem</h3>
                    <p id="genre">Genre: Sci-fi</p>
                    <p id="pagess"><span>Number of pages: 200</span></p>
                    <p id="year">Year published: 2022</p>
                    <p id="description">It is an amazing book for the undying love </p>
                </div>
                <div className="product-btn">
                    <div className="author">
                        <a href="#" className="btn-edit">Edit</a>
                        <a href="#" className="btn-delete">Delete</a>
                    </div>

                    <a href="#" className="btn-vote">Vote</a>
                    
                    <p className="vote-message">You've already voted for this volcano!</p>
                </div>
            </div>
        </section>
    </main>

       </>
    );
}