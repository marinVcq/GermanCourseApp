import logo from './logo.svg';
import './sass/main.sass';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet  } from "react-router-dom";

import Register from "./pages/Register"
import Home from "./pages/Home"
import Lesson from "./pages/Lesson"
import Login from "./pages/Login"
import Write from "./pages/Write"

// Import Components
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

// Footer and Navbar Page layout
const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Write",
        element: <Write/>,
      },
      {
        path: "/Lesson/:id",
        element: <Lesson/>,
      },
    ]
  
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },  
  {
    path: "/write",
    element: 
    <>
    <Navbar/>
    <Write/>
    <Footer/>
    </>
    
  },
  {
    path: "/lesson",
    element:
    <>
    <Navbar/>
    <Lesson/>
    <Footer/>
    </>
   
  },
])

// Main App
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
