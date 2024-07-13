import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./features/ui/Layout";
import Home from "./features/ui/Home";
import Catalog, { loader as catalogLoader } from "./features/catalog/Catalog";
import Error from "./features/ui/Error";
import Cart from "./features/cart/Cart";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,

      children: [
        { path: "/", element: <Home /> },
        { path: "/catalog", element: <Catalog />, loader: catalogLoader },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
