import { createContext, type Dispatch } from "react";
import type { CartAction, CartState } from "./cartReducer";

//Observar que tiene mi contexto en CartContext.Provider 
interface CartContextType{
    state: CartState,
    dispatch: Dispatch<CartAction>
}
//casteo
export const CartContext = createContext({} as CartContextType)
//OTRA FORMA
//export const CartContext = createContext<CartContextType | undefined>(undefined)

