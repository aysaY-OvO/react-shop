import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './pages/main/main'
import Catalog from './pages/catalog/catalog';
import ErrorPage from './components/error-page/error';
import CartPage from './pages/cart/cart';

import Provider from './provider';
import './main.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />
  },
  {
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: '/cart',
    element: <CartPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
