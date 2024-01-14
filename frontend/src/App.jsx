
import CreateEvent from '../components/CreateEvent';
import EventDetails from '../components/EventDetails';
import EventList from '../components/EventList';
import './App.css';

function App() {
  const testEventId = 'your-test-event-id'; // Replace with an actual event ID for testing

  return (
    <>
      <div>
        <h1>Event Management App</h1>
      </div>
      <div className="component-section">
        <h2>Create Event</h2>
        <CreateEvent />
      </div>
      <div className="component-section">
        <h2>Event Details</h2>
        <EventDetails eventId={testEventId} />
      </div>
      <div className="component-section">
        <h2>Event List</h2>
        <EventList />
      </div>
    </>
  );
}

export default App;
