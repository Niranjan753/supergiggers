import React from "react";
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
// import PhoneAuth from "./components/PhoneAuth/PhoneAuth"; // Import PhoneAuth
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import Upskill from "./components/Upskill/UpSkill.jsx";
import Communities from "./components/communities/Communities.jsx";
import FindGigs from "./components/FindGigs/FindGigs.jsx";
import Profile from "./components/profile/Profile.jsx";
import Featured from "./components/featured/Featured.jsx";
// import PhoneAuth from "./components/PhoneAuth/PhoneAuth.jsx";
import Login from "./pages/login/Login.jsx";


function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/upskill",
          element: <Upskill />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/communities",
          element: <Communities />,
        },
        {
          path: "/findgigs",
          element: <FindGigs />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/login", // Use the existing login path
          element: <Login />, // Render PhoneAuth instead of the previous Login component
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
