import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { DetailRestaurantCard } from "./components/DetailRestaurantCard";
import { RestaurantsPage } from "./pages/RestaurantsPage";

//https://gist.github.com/andreynaz4renko/445096cfdbb60413573d63500124d968
//https://www.figma.com/file/OEMzojLNVhCeukpmTfHZ4i/Rover-Photos?type=design&node-id=0-1&mode=design&t=LJgiIGCNNNV8MgH1-0

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <RestaurantsPage />,
      },
      {
        path: "/:id",
        element: <DetailRestaurantCard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
