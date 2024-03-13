
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import EventsPage from "./pages/EventsPage";
import EventDetail from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLAyout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRootLayout";
import Error from "./pages/Error";
import { loader as eventLoader } from "./pages/EventsPage";
import { loader as eventdetailloader } from "./pages/EventDetailPage";

import {action as deletEventAction} from './pages/EventDetailPage'
import {action as manipulatEventeAction} from './components/EventForm'
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLAyout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventLoader },
          {
            path: ":eventid",
            id:'event-detail',
            loader: eventdetailloader,
            children: [
              { index: true, element: <EventDetail />, action: deletEventAction},
              { path: "edit", element: <EditEventPage />, action: manipulatEventeAction  },
            ],
          },

          { path: "new", element: <NewEventPage />, action: manipulatEventeAction},
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div></div>;
    </RouterProvider>
  );
}

export default App;
