import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import { router } from './Router/Router.jsx'
import Context from './Context/Context.jsx'
import { QueryClient, QueryClientProvider, } from 'react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
       <QueryClientProvider client={queryClient}>
      <div className=' max-w-5xl mx-auto'>
      <RouterProvider router={router} ></RouterProvider>
  </div>
    </QueryClientProvider>
      
    </Context>
  </React.StrictMode>,
)
