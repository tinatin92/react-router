import { json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <div style={{ textAlign: "center" }}></div>
      {<EventsList events={events} />}
    </>
  );
}

export default EventsPage;
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    /*  throw new Response(JSON.stringify({message: 'could not fetch event'}), {
        status: 500
       }) */
    return json(
      { message: "could not fetch event" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
