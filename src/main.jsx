import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './AuthProvider/AuthProvider';
import ProfileDetails from './Pages/ProfileDetails/ProfileDetails';


// All the routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/signup",
    element: <SignUp/>
  },
  {
    path: '/profile',
    element:<ProfileDetails></ProfileDetails>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
