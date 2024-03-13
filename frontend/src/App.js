// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPagen
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
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
