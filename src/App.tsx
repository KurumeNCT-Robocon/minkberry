import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShelfInventoryView from "./pages/ShelfInventoryView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShelfInventoryView />,
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
