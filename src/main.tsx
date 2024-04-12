//* Packages Imports */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//* Components Imports */
import App from "@Src/App";
import Crypto from "@Pages/Crypto";
import Trending from "@Pages/Trending";
import Saved from "@Pages/Saved";
import CryptoDetails from "@Components/CryptoDetails";

//* Styles Imports */
import "@Src/index.css";

//* Router Configurations */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Crypto />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
