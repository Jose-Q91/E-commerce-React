import { useContext } from "react"
import styles from "./Cardproduct.module.css"
import { CartContext } from "../../../context/CartContext"


export const CardProduct = ({product}) => {

    const {dispath} = useContext(CartContext)

    const item = {
        id: product.tail,
        name: product.name,
        image: product.image,
        quantity: 1
    }

    const addToCart = (item) => {
        dispath({type: "ADD_TO_CART", payload: item})
    }

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
                <button onClick={()=> addToCart(item)} className={styles.cardButton}>add to cart</button>
            </div>
        </div>
    )
}
