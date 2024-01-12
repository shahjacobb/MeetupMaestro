const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        // Parse the event data from the request body
        const eventData = JSON.parse(event.body);

        // Generate a unique ID for the event
        const eventId = uuid.v4();

        // Create a new event object with the provided data
        const newEvent = {
            id: eventId,
            title: eventData.title,
            date: eventData.date,
            location: eventData.location,
            description: eventData.description,
        };

        // Save the new event to the DynamoDB table
        await dynamodb.put({
            TableName: 'EventsTable',
            Item: newEvent,
        }).promise();

        // Return the ID of the created event
        return {
            statusCode: 200,
            body: JSON.stringify({ eventId: eventId }),
        };
    } catch (error) {
        console.error('Error creating event:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error creating event' }),
        };
    }
};
