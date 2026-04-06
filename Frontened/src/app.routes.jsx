import {createBrowserRouter} from "react-router"
import Home from "./Features/interview/pages/Home"
import Login from "./Features/auth/pages/Login"
import Register from "./Features/auth/pages/Resgister"
import Protected from "./Features/auth/components/Protected"
import Interview from "./Features/interview/pages/interview"
import LandingPage from "./Features/auth/pages/LandingPage"
import RootLayout from "./Features/auth/components/RootLayout"
import Navbar from "./Features/auth/components/Navbar"




export const router = createBrowserRouter([
  {
    // 1. Set the RootLayout as the main parent component
    element: <RootLayout />, 
    
    // 2. Put all your pages inside "children"
    children: [
      // --- Public Routes ---
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },

      // --- Protected Routes ---
      {
        path: "/dashboard",
        element: <Protected><Home /></Protected>
      },
      {
        path: "/interview",
        element: <Protected><Interview /></Protected> 
      },
      {
        path: "/interview/:interviewId",
        element: <Protected><Interview /></Protected>
      }
    ]
  }
]);