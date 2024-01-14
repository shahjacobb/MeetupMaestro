import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventDetails = ({ eventId }) => {
    const [event, setEvent] = useState(null);

    useEffect(() => {
        axios.get(`/api/events/${eventId}`)
             .then(response => {
                 setEvent(response.data);
             })
             .catch(error => {
                 console.error('Error fetching event details:', error);
             });
    }, [eventId]);

    if (!event) {
        return <div>Loading event details...</div>;
    }

    return (
        <div>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <p>Event Creator: {event.eventHost} </p>
        </div>
    );
};

export default EventDetails;
