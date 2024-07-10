import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";

import "./App.css";

import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <MantineProvider>
      <Notifications position="top-right" />

      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
