const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        const eventId = event.pathParameters.eventId; // Extracting the event ID from the request

        const params = {
            TableName: 'EventsTable', // Replace with your actual table name
            Key: { id: eventId },
        };

        const result = await dynamodb.get(params).promise();
        if (result.Item) {
            return {
                statusCode: 200,
                body: JSON.stringify(result.Item),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Event not found' }),
            };
        }
    } catch (error) {
        console.error('Error retrieving event details:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error retrieving event details' }),
        };
    }
};
