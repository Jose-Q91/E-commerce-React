import styles from "./Cardproduct.module.css"


export const CardProduct = ({product}) => {
    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={product.image} alt={product.anme} />
            <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <div className={styles.cardBody}>
                    <p className={styles.cardType}>{product.type}</p>
                    <p className={styles.cardPrice}>
                        precio, <small>00</small>
                    </p>
                </div>
                <button className={styles.cardButton}>add to cart</button>
            </div>
        </div>
    )
}
