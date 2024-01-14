import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/events')
            .then(response => {
                setEvents(response.data); // Update the events state with the fetched list
            })
            .catch(err => {
                setError(err); // Set the error state if an error occurs
            })
            .finally(() => {
                setIsLoading(false); // Set loading to false once the API call is complete
            });
    }, []);

    // If still loading, show a loading message
    if (isLoading) {
        return <div>Loading events...</div>;
    }

    // If there was an error, show an error message
    if (error) {
        return <div>Error loading events.</div>;
    }

    // Render the list of events
    return (
        <div>
            <h2>Event List</h2>
            {events.length > 0 ? (
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <h3>{event.title}</h3>
                            <p>Date: {event.date}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div> No events available ATM </div>
            )}
        </div>
    );
};

export default EventList;
