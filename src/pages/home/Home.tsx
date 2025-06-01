import { useEffect, useState } from "react"
import { Hero } from "../../components/ui/Hero"
import styles from "./Home.module.css"
import { CardProduct } from "../../components/ui/CardProduct"
import { getProducts } from "../../service"
//import type { Product } from "../../interface"
import { Toaster } from "sonner"
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query"


export const Home = () => {

  const queryClient = useQueryClient()

  const [page, setPage] = useState(0)

  const { data, isLoading, error, isPlaceholderData } = useQuery({ queryKey: ['products', page], queryFn: () => getProducts(page), placeholderData: keepPreviousData, staleTime: 5000 })

  useEffect(() => {
    if (!isPlaceholderData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['products', page + 1],
        queryFn: () => getProducts(page + 1),
      })
    }

  }, [data, isPlaceholderData, page, queryClient])


  /*

  FORMA SIN REACT-QUERY
  
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
*/


  /*useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    }).catch(()=>{
      setError(true)
    }).finally(()=>{
      setIsLoading(false)
    })
  }, [])
  //console.log(products)
*/
  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <div className={styles.container}>
        {data?.products.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0} className={styles.paginationButton}>previus page</button>
        <div className={styles.paginationActive}>
          <span>{page + 1}</span>
        </div>
        <button onClick={() => setPage((old) => (data?.hasMore ? old + 1 : old))}
          disabled={isPlaceholderData || !data?.hasMore} className={styles.paginationButton}
        >next page</button>
      </div>
    </>
  )
}
