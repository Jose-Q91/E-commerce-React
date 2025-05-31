import { useEffect, useState } from "react"
import { Hero } from "../../components/ui/Hero"
import styles from "./Home.module.css"
import { CardProduct } from "../../components/ui/CardProduct"
import { getProducts } from "../../service"
import type { Product } from "../../interface"
import { Toaster } from "sonner"

export const Home = () => {

  const [products, setProducts] = useState<Product[]>([])

  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  /* const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }*/

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    }).catch(()=>{
      setError(true)
    }).finally(()=>{
      setIsLoading(false)
    })
  }, [])
  //console.log(products)

  return (
    <>
      <Hero />
      <Toaster richColors/>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.tail} product={product}/>
        ))}
      </div>
    </>
  )
}
