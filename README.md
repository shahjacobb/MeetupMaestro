# Event Creation App - MeetupMaestro



## Overview
*"MeetupMaestro"* (borrowing inspiration from *Luma*, a popular event management app that took off recently) is an event creation and management web application. The frontend of the application is built with React, providing a UI for users to sign up, sign in, create new events, and view details of an event/list of events. The backend of the application powered by the AWS Serverless suite, specifically AWS Lambda functions for the web 'server' (which runs as needed) and DynamoDB for data store.  


## Tech Stack

### Frontend
- **React** - for reusable markup and functionality
- **Vite** - build tool i opted for over `create-react-app`
- **Axios** - to make requests to the endpoints that trigger the lambda functions

### Backend 
- **AWS Lambda** - used for the web server as opposed to express.
- **AWS Management Console** - for configuring the lambda functions and triggers
- **DynamoDB** - nosql data store


## Instructions for Running the Project

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.

### Backend Deployment
1. Switch to the `backend` directory.
2. Ensure AWS credentials are set up.
3. Deploy the backend: `serverless deploy`.

# Background

I basically wanted to learn how to use AWS to host and serve my web application rather than [express.js](https://expressjs.com/). I wanted to specifically learn about AWS Serverless because I knew about [AWS Lambdas](https://aws.amazon.com/lambda/getting-started/) but wasn't really sure how it worked and didn't even understand what serverless was. 

Thanks to this project, I was able to get a lot of experience with the react component -> axios --> talk to endpoint --> trigger lambda function on AWS server --> send response back to front end --> render loop.

## To Do
- [x] Write lambda functions for all database logic: `createEvent.js`, `getEventDetails.js`, `getEvents.js`, `userSignIn.js`, `userSignUp.js`
- [X] Write React components to trigger lambdas
- [X] Create EventRegistrants table in DynamoDB
- [x] Set up routes in API gateway.... almost forgot to do this
- [x] Deploy API on API Gateway
- [x] Got rid of `serverless.yml` and `react-router` plans. Added too much overhead and complexity for an app with basically 3 (technically, 5) functions. 
