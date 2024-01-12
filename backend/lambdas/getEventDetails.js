const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        const params = {
            TableName: 'EventsTable', // Replace with your table name
        };

        const data = await dynamodb.scan(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Items),
        };
    } catch (error) {
        console.error('Error retrieving events:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error retrieving events' }),
        };
    }
};
