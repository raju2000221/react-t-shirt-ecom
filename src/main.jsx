import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Main from './Component/Layout/Main.jsx';
import OrderReview from './Component/OrderReview/OrderReview.jsx';
import Login from './Component/Login/Login.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('t-shirt.json')
        },
        {
          path:'review',
          element:<OrderReview></OrderReview>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
