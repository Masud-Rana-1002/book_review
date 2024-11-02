import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './All Component/root/Root.jsx';
import Home from './All Component/Home/Home.jsx';
import ListedBooks from './All Component/Listed Books/ListedBooks.jsx';
import PagesToRead from './All Component/Pages To  Read/PagesToRead.jsx';
import BookDetails from './All Component/Home/BookDetails.jsx';
import UserContext from './Context.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"/listedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/pagesToRead",
        element:<PagesToRead></PagesToRead>
      },
      {
        path:"/bookDetails/:id",
        element:<BookDetails></BookDetails>,
        loader: ()=> fetch('../public/booksData.json')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <UserContext>
      <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
  </UserContext>

)
