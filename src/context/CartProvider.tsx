import { useReducer } from "react"
import { cartReducer, initialState } from "./cartReducer"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [state, dispath] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{ state, dispath }}>
            {children}
        </CartContext.Provider>
    )

}