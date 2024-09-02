import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
const routing = createBrowserRouter([
  { path: "/", element: <AllMeetUpsPage /> },
  { path: "/new-meetup", element: <NewMeetupPage /> },
  { path: "/favourites", element: <FavouritesPage /> },
]);
function App() {
  return <RouterProvider router={routing} />;
}

export default App;
