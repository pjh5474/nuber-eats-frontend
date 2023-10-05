import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LoggedIn } from "./routes/logged-in";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LoggedIn />,
      },
    ],
  },
]);

export default router;
