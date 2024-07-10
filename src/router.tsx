import { createBrowserRouter } from "react-router-dom";
import Task1 from "./pages/task-1";
import Task2 from "./pages/task-2";
import Task3 from "./pages/task-3";
import Home from "./pages/home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/task-1",
    element: <Task1 />,
  },
  {
    path: "/task-2",
    element: <Task2 />,
  },
  {
    path: "/task-3",
    element: <Task3 />,
  },
]);
