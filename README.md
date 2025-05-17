# Notification Service

A system to send notifications to users via Email, SMS, and in-app channels.

## Features

- Send notifications via Email, SMS, and in-app channels
- Retrieve user notifications
- Queue-based notification processing with RabbitMQ
- Retry mechanism for failed notifications
- MongoDB for data storage

## Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- RabbitMQ (with amqplib)
- Nodemailer for email notifications

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- RabbitMQ (optional, the system will simulate a queue if RabbitMQ is not available)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd notification-service
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file:
   ```
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration values.

## Running the Application

### Development Mode

```
npm run dev
```

### Production Mode

```
npm start
```

## API Endpoints

### Send a Notification

```
POST /notifications
```

Request Body:
```json
{
  "userId": "user123",
  "type": "EMAIL", // EMAIL, SMS, or IN_APP
  "title": "Welcome to our platform",
  "content": "Thank you for joining our platform!",
  "metadata": {
    "email": "user@example.com", // For EMAIL type
    "phoneNumber": "+1234567890" // For SMS type
  }
}
```

### Get User Notifications

```
GET /users/{id}/notifications?page=1&limit=10
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "_id": "60f1a5b3e6b3f32d8c9e4b7a",
      "userId": "user123",
      "type": "EMAIL",
      "title": "Welcome to our platform",
      "content": "Thank you for joining our platform!",
      "status": "SENT",
      "createdAt": "2023-07-16T12:34:56.789Z",
      "updatedAt": "2023-07-16T12:34:56.789Z"
    }
  ],
  "pagination": {
    "total": 1,
    "page": 1,
    "limit": 10,
    "pages": 1
  }
}
```

## Architecture

The notification service uses a queue-based architecture to process notifications asynchronously:

1. When a notification is created, it is stored in the database and sent to a RabbitMQ queue.
2. A consumer processes the notification and attempts to send it via the appropriate channel.
3. If the notification fails, it is retried with exponential backoff (up to 3 retries).

## Assumptions

- The system assumes that user IDs are provided by the client and are valid.
- For email notifications, the system expects an email address in the metadata or uses a default pattern.
- For SMS notifications, the system expects a phone number in the metadata or uses a default value.
- The system simulates sending notifications in development mode.
- The system will simulate a queue if RabbitMQ is not available.

## Future Improvements

- Add authentication and authorization
- Add rate limiting
- Add more notification channels (e.g., push notifications)
- Add templates for notifications
- Add scheduling for notifications
- Add batch processing for notifications
- Add monitoring and logging
- Add unit and integration tests


