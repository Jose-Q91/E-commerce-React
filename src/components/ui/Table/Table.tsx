import styles from "./Table.module.css"
import useCartContext from "../../../hooks/useCartContext"
import type { CartProduct } from "../../../interface"


export const Table = () => {

  const { state: { cartItems }, dispatch } = useCartContext()

  const removeToCart = (item: CartProduct) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item })
  }

  const addToCart = (item: CartProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: item })
  }

  const totalPay = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    return total
  }

  return (
    <>
      <table className={styles.modalTable}>
        <thead>
          <tr>
            <th>Products</th>
            <th>Delete</th>
            <th>Quantity</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => removeToCart(item)} className={styles.modalButtonRemove}>-1</button>
              </td>
              <td>
                <p>{item.quantity}</p>
              </td>
              <td>
                <button onClick={() => addToCart(item)} className={styles.modalButtonAdd}>+1</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.modalTotalContainer}>
        <h3>${totalPay()}</h3>
      </div>
    </>
  )
}
