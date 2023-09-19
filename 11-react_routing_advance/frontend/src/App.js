import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import EventPage from "./components/pages/EventsPage";
import EventDetailPage from "./components/pages/EventDetailPage";
import NewEventPage from "./components/pages/NewEventPage";
import EditEventPage from "./components/pages/EditEventPage";
import RootLayout from "./components/pages/Root";
import EventRootLayout from "./components/pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      // events에만 해당하는 자식 페이지 만드려면 기존과 똑같이 하면 된다
      // eventsRoot 파일을 만들고 거기서ㄷ 띄우려는 레이아웃과 children을 넣어두면 됨!
      {path: 'events', element: <EventRootLayout />, children: [
        { index: true, element: <EventPage />},
        { path: ':eventId', element: <EventDetailPage />},
        { path: 'new', element: <NewEventPage />},
        { path: ':eventId/edit', element: <EditEventPage />},
      ]},
  
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
