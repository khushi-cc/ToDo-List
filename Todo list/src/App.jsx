import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import RootLayout from "./Pages/RootLayout";
import HomePage from "./Pages/HomePage";
import AddToDO from "./Pages/AddToDO";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      index: "/",
      element: <RootLayout />,
      children: [
        {
          index: "true",
          element: <HomePage />,
        },
        {
          path: "/addtodo",
          element: <AddToDO />,
        },
      ],
    },
  ]);

  return (
    <>
      <button>exit</button>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
