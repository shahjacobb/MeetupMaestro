# Event Management Application

## Overview
This Event Management Application is a full-stack project designed to streamline the process of organizing and participating in events. It combines a React-based frontend with a serverless AWS backend, providing a seamless and scalable user experience.

## Why Serverless and AWS Technologies?
In this project, I've chosen to use AWS Lambda, Serverless, and DynamoDB for several compelling reasons:




## Tech Stack

### Frontend
- **React** - for reusable markup and functionality
- **Vite** - build tool i opted for over `create-react-app`
- **Axios** - to make requests to the endpoints that trigger the lambda functions
- `react-router-dom` - for navigating the dom

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

---

I basically wanted to learn how to use AWS to host and serve my web application rather than [express.js](https://expressjs.com/). I wanted to specifically learn about AWS Serverless because I knew about [AWS Lambdas](https://aws.amazon.com/lambda/getting-started/) but wasn't really sure how it worked and didn't even understand what serverless was. 

Thanks to this project, I was able to get a lot of experience with the react component -> axios --> talk to endpoint --> trigger lambda function on AWS server --> send response back to front end --> render loop.
