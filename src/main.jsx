import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Form from "./components/Form.jsx";
import FlightClass from "./components/FlightClass.jsx";
import Tickets from "./components/Tickets.jsx";
// import { ClerkProvider } from '@clerk/clerk-react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import your publishable key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Form />,
    //   },
    //   {
    //     path: "flightClass",
    //     element: <FlightClass />,
    //   },
    //   {
    //     path: "tickets",
    //     element: <Tickets />,
    //   },
    // ],
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/flightClass",
    element: <FlightClass />,
  },
  {
    path: "/tickets",
    element: <Tickets />,
  },
]);

// Render the app with React Router and ClerkProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    {/* </ClerkProvider> */}
  </React.StrictMode>
);