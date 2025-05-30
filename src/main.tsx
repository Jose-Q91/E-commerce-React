import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/Layauts/LayoutMain.tsx'
import './index.css'
import { Cart } from './pages/cart/Cart.tsx'
import { Home } from './pages/home/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain/>,
    children: [
      { index:true, element: <Home/> },
      { path: "/cart", element: <Cart />}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </StrictMode>,
)
