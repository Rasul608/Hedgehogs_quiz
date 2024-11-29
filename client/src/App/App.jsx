import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../Layout/Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFound/NotFoundPage";
import QuestionPage from "../Pages/QuestionPage/QuestionPage";
import Maks from "../Pages/MaksPage/Maks";

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
        {
          path: `/topics/:id`,
          element: <QuestionPage />,
        },
        {
          path: `/maks`,
          element: <Maks />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
