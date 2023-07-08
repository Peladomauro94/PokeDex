import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './components/Error/index.jsx'
import NewCard from './components/NewCard/index.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/pokecard/:id",
    element : <NewCard/>
  },
  {
    path:"/error",
    element: <Error />
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
