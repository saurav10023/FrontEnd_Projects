import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProjectsLanding from './Home.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Cart from './components/cartcomponents/Cart.jsx'
import Todo from './components/TodoComponents/Todo.jsx'
import TicTac from './components/tictaccomponents/TicTac.jsx'

const router = createBrowserRouter([
  {
    path:"/" , 
    element:<Layout/>,
    children:[
      {index:true , element:<ProjectsLanding/>},
      {path: "cartproject" , element:<Cart/>},
      {path: "todoproject" , element:<Todo/>},
      {path: "tictacproject" , element: <TicTac/>}
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
