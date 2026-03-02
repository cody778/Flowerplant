import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Index from "./views/index";
import Create from "./views/create";
import Update from "./views/update";
import MyPlants from "./views/myPlants";
import About from "./views/about";

const router = createBrowserRouter(
  [
    { 
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "update/:id",
          element: <Update />,
        },
        {
          path: "myPlants",
          element: <MyPlants />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ],
  {
    basename: "/Flowerplant",
  }
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}