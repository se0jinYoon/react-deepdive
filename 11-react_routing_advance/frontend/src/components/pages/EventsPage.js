import { Link } from "react-router-dom";
import EventDetailPage from "./EventDetailPage";
const PRODUCTS = [
  { id: 1, title: 'event1' },
  { id: 2, title: 'event2' },
  { id: 3, title: 'event3' },
  { id: 4, title: 'event4' },
];

function EventPage() {
  return (
    <>
      <h1>EventPage</h1>
      <ul>
        {PRODUCTS.map((event) => (
            <li key={event.id}>
                <Link to={`${event.id}`}>{event.title}</Link>
            </li>
        ))}
      </ul>
    </>
  );
}

export default EventPage;
