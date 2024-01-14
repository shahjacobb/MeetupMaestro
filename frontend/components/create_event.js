import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        title: '',
        date: '',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/events', eventData);
            alert('Event created successfully');
            // Reset form or redirect user
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Error creating event');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={eventData.title}
                onChange={handleChange}
                placeholder="Event Title"
            />
            <input
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
            />
            <input
                type="text"
                name="location"
                value={eventData.location}
                onChange={handleChange}
                placeholder="Location"
            />
            <textarea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <textarea 
                name = "host_name"
                value= {eventData.hostName}
                onChange={handleChange}
                placeholder='Host of Event'
                />
            <button type="submit">Create Event</button>
        </form>
    );
};

export default CreateEvent;
