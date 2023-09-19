import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import EventPage from "./components/pages/EventsPage";
import EventDetailPage from "./components/pages/EventDetailPage";
import NewEventPage from "./components/pages/NewEventPage";
import EditEventPage from "./components/pages/EditEventPage";
import RootLayout from "./components/pages/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      { path: '/events', element: <EventPage />},
      { path: '/events/:eventId', element: <EventDetailPage />},
      { path: '/events/new', element: <NewEventPage />},
      { path: '/events/:eventId/edit', element: <EditEventPage />},
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
