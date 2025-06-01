import CreditCards from "../../../credit-cards"
import styles from "./CardCredit.module.css"
import { toast } from "sonner"

import React, { useState } from "react"

export const CardCredit = () => {

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: ''
    })

    const { number, name, expiry, cvc } = cardData

    //VAMOS SETEANDO EL cardData
    //GUARDA EN UN OBJETO Y LOS  SETEA
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            [event.target.name]: event.target.value
        })
    }

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            focus: event.target.name
        })
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //Validar que los campos no estan vacios

        if ([number, name, expiry, cvc].includes('')) {
            //Mostrar un mensaje de Error
            toast.error("All fields are required")
            return
        }

        //Limpiar estado
        setCardData({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focus: ''
        })
    }

    return (
        <div className={styles.Container}>
            <div>
                <CreditCards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={cardData.focus as any}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label htmlFor="number">Card Number</label>
                    <input onChange={handleInputChange} onFocus={handleInputFocus} type="text" name="number" id="number" value={number} />
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="name">Card Name</label>
                    <input onChange={handleInputChange} onFocus={handleInputFocus} type="text" name="name" id="name" value={name} />
                </div>
                {/**Grupo */}
                <div className={styles.formInputGrup}>
                    <div className={styles.formControl}>
                        <label htmlFor="expiry">Card Expiry</label>
                        <input onChange={handleInputChange} onFocus={handleInputFocus} type="text" name="expiry" id="expiry" value={expiry} />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="cvc">Card CVC</label>
                        <input onChange={handleInputChange} onFocus={handleInputFocus} type="text" name="cvc" id="cvc" value={cvc} />
                    </div>
                </div>
                <button type="submit" className={styles.buyButton}>Buy Now</button>
            </form>
        </div>
    )
}
