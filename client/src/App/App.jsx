import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../Layout/Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFound/NotFoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
