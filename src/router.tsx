import { createBrowserRouter } from "react-router-dom";
import Task1 from "./pages/task-1";
import Task2 from "./pages/task-2";
import Task3 from "./pages/task-3";
import Home from "./pages/home";
import MainLayout from "./layouts/main-layout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/task-1",
    element: (
      <MainLayout>
        <Task1 />
      </MainLayout>
    ),
  },
  {
    path: "/task-2",
    element: (
      <MainLayout>
        <Task2 />
      </MainLayout>
    ),
  },
  {
    path: "/task-3",
    element: (
      <MainLayout>
        <Task3 />
      </MainLayout>
    ),
  },
]);
