import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Article from "./Pages/Article/Article.tsx";
import HomePage from "./Pages/HomePage/HomePage.tsx";
import PostDetails from "./Pages/PostDetails/PostDetails.tsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Article />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/postDetails/:id",
          element: <PostDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
