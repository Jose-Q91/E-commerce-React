import type { Product } from "../interface"


 export const getProducts = async (page = 0, limit=24):Promise<{products: Product[], hasMore:boolean}> => {
  try {
    const response = await fetch(`http://localhost:3000/products?_page=${page+1}&_limit=${limit}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    console.log(response.headers.get("X-Total-Count"));
    const totalCount = Number(response.headers.get("X-Total-Count") || "0");
    const hasMore = (page+1) * limit < totalCount;

    return { products: data, hasMore };
  } catch (error) {
    throw new Error("Network error");
  }
  }