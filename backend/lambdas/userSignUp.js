const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const bcrypt = require('bcryptjs');

exports.handler = async (event) => {
    try {
        const userData = JSON.parse(event.body);
        if (!userData.username || !userData.password) {
            return { statusCode: 400, body: JSON.stringify({ message: 'Username and password are required' }) };
        }

        const hashedPassword = bcrypt.hashSync(userData.password, 10);
        const params = {
            TableName: 'UsersTable',
            Item: { username: userData.username, password: hashedPassword },
        };

        await dynamodb.put(params).promise();
        return { statusCode: 201, body: JSON.stringify({ message: 'User created successfully' }) };
    } catch (error) {
        console.error('Error signing up user:', error);
        return { statusCode: 500, body: JSON.stringify({ message: 'Error signing up user' }) };
    }
};
