const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const bcrypt = require('bcryptjs');

exports.handler = async (event) => {
    try {
        const loginData = JSON.parse(event.body);
        if (!loginData.username || !loginData.password) {
            return { statusCode: 400, body: JSON.stringify({ message: 'Username and password are required' }) };
        }

        const params = {
            TableName: 'UsersTable',
            Key: { username: loginData.username },
        };

        const result = await dynamodb.get(params).promise();
        if (!result.Item) {
            return { statusCode: 401, body: JSON.stringify({ message: 'User does not exist' }) };
        }

        const validPassword = bcrypt.compareSync(loginData.password, result.Item.password);
        if (!validPassword) {
            return { statusCode: 401, body: JSON.stringify({ message: 'Invalid password' }) };
        }

        return { statusCode: 200, body: JSON.stringify({ message: 'User signed in successfully' }) };
    } catch (error) {
        console.error('Error signing in user:', error);
        return { statusCode: 500, body: JSON.stringify({ message: 'Error signing in user' }) };
    }
};
