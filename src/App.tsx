import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateEventPage from "./pages/create-event";
import DashboardPage from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEventPage />,
  },
  {
    path: "/dashboard/:eventId",
    element: <DashboardPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
