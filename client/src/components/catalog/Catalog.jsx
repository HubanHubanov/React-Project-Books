import styles from "./Catalog.module.css"

export default function Catalog() {
    return (
        <>
          <div className={styles["background"]}>
        <div className={styles["row"]}>
        <section id="viewCatalog" className="background-img">

            <div className={styles["column"]}>
                <a href="" className="added-book">
                    <img src="https://images.wsj.net/im-173743/?width=1280&size=1.33333333" a />
                    <h3>Name of the book</h3>
                    <h4>Number of pages: 42</h4>
                </a>
                </div>

                <div className={styles["column"]}>
                <a href="" className="added-book">
                    <img src="https://i1.helikon.bg/products/6658/22/226658/226658_b.jpg" />
                    <h3>Name of the book</h3>
                    <h4>Number of pages: 42</h4>
                </a>
                </div>

                <div className={styles["column"]}>
                  <a href="" className="added-book">
                    <img src="https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg"  />
                    <h3>Name of the book</h3>
                    <h4>Number of pages: 42</h4>
                </a>
                </div>

                <div className={styles["column"]}>
                <a href="" className="added-book">
                    <img src="https://images.wsj.net/im-173743/?width=1280&size=1.33333333" a />
                    <h3>Name of the book</h3>
                    <h4>Number of pages: 42</h4>
                </a>
                </div>

                <div className={styles["column"]}>
                <a href="" className="added-book">
                    <img src="https://images.wsj.net/im-173743/?width=1280&size=1.33333333" a />
                    <h3>Name of the book</h3>
                    <h4>Number of pages: 42</h4>
                </a>
                </div>

                <div className={styles["column"]}>
                <a href="" className="added-book">
                    <img src="https://images.wsj.net/im-173743/?width=1280&size=1.33333333" a />
                    <h3>Name of the book</h3>
                    <h4>Number of pages: 42</h4>
                </a>
                </div>

                


             {/* <div className="guest">
                There are no Hotels found...
            </div> */}
        </section>
        </div>

        </div>
     
        </>
    );
}