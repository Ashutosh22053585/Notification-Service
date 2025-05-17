# How to Run the Notification Service

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (optional, the service will run in demo mode without it)

## Starting the Server

### Option 1: Using the Batch File

1. Double-click the `start-server.bat` file
2. The server will start on port 3000

### Option 2: Using npm

```bash
npm start
```

### Option 3: Using Node directly

```bash
node src/server.js
```

### Option 4: Using a Different Port

```bash
set PORT=3001 && node src/server.js
```

## Testing the API

### Using curl

1. Send a notification:

```bash
curl -X POST http://localhost:3000/notifications -H "Content-Type: application/json" -d "{\"userId\":\"user123\",\"type\":\"SMS\",\"title\":\"Test Notification\",\"content\":\"This is a test notification\",\"metadata\":{\"phoneNumber\":\"+918249994855\"}}"
```

2. Get user notifications:

```bash
curl http://localhost:3000/users/user123/notifications
```

### Using Postman or Similar Tools

1. Send a POST request to `http://localhost:3000/notifications` with the following JSON body:

```json
{
  "userId": "user123",
  "type": "SMS",
  "title": "Test Notification",
  "content": "This is a test notification",
  "metadata": {
    "phoneNumber": "+918249994855"
  }
}
```

2. Send a GET request to `http://localhost:3000/users/user123/notifications`

## Troubleshooting

### Port Already in Use

If you see an error like "Port 3000 is already in use", try using a different port:

```bash
set PORT=3001 && node src/server.js
```

### Connection Issues

If you're having trouble connecting to the server:

1. Check if the server is running (you should see "Server is running" in the console)
2. Try using a different port
3. Check your firewall settings
4. Try accessing the server from the same machine using `localhost` or `127.0.0.1`

### MongoDB Connection Issues

The service will run in demo mode if MongoDB is not available. You'll see a message like "Failed to connect to MongoDB - running in demo mode" in the console.

If you want to use MongoDB:

1. Make sure MongoDB is installed and running
2. Update the `.env` file with the correct MongoDB URI