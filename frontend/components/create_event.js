import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventDetails = ({ eventId }) => {
    const [event, setEvent] = useState(null);

    useEffect(() => {
        axios.get(`/api/events/${eventId}`)
            .then(response => {
                setEvent(response.data);
            })
            .catch(error => {
                console.log('Error fetching event details:', error);
            });
    }, [eventId]);

    if (!event) {
        return <div>Loading event details...</div>;
    }

    return (
        <div>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
        </div>
    );
};

export default EventDetails;
