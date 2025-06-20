import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/Layauts/LayoutMain.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import './index.css'
import Checkout from './pages/Checkout/Checkout.tsx'
import { Home } from './pages/home/Home.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './pages/Login/Login.tsx'


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      { path: "/checkout", element: <Checkout /> }
    ]
  },
  {
    path: "login", element: <Login />
  },
  {
    path: "/dashboard", element: <p>Dashboard</p>

  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>,
)
