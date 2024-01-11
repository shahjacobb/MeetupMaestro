import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventDetails = ({ eventId }) => {
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await axios.get(`/api/events/${eventId}`);
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };

        fetchEventDetails();
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
            <p>Attendees: {event.attendees.join(', ')}</p>
            {/* Add any additional details you want to display */}
        </div>
    );
};

export default EventDetails;
