# Notification Service Verification Guide

This guide will help you verify that all components of the notification service are working correctly.

## 1. Start the Server

First, start the notification service server:

1. Double-click on `start-server.bat`
2. Wait for the server to start (you should see "Server is running on port 3000")
3. Keep this window open to see the server logs

## 2. Run the Verification Script

Next, run the verification script to check all components:

1. Open a new command prompt window
2. Navigate to the project directory
3. Run `verify-system.bat`
4. Check the results of each verification step

## 3. Test the API

Finally, test the API endpoints:

1. Open another command prompt window
2. Navigate to the project directory
3. Run `test-api.bat`
4. Check the responses from each API call

## What to Look For

### In the Server Logs

When notifications are processed, you should see logs like:

```
===== SIMULATING QUEUE: notifications =====
Notification data: {...}

===== PROCESSING NOTIFICATION =====

===== SENDING SMS =====
To: +918249994855
Title: Test SMS
Content: This is a test SMS notification
======================

===== NOTIFICATION PROCESSED: SUCCESS =====
```

### In the Verification Results

All verification steps should show "WORKING" or "SIMULATED (Working)". If any step shows "FAILED" or "ERROR", there's an issue with that component.

### In the API Test Results

All API calls should return successful responses. For example:

```json
{"success":true,"message":"Notification queued successfully","data":{...}}
```

## Common Issues and Solutions

### Server Won't Start

- Check if another process is using port 3000
- Try changing the port in the `.env` file
- Check for error messages in the console

### Notifications Not Being Processed

- Check the server logs for error messages
- Make sure the notification type is valid (EMAIL, SMS, or IN_APP)
- Check if the queue service is working

### API Calls Failing

- Make sure the server is running
- Check the request format (all required fields must be present)
- Check for error messages in the response

## Manual Testing

You can also manually test the API using curl:

```bash
# Send an SMS notification
curl -X POST http://localhost:3000/notifications -H "Content-Type: application/json" -d "{\"userId\":\"user123\",\"type\":\"SMS\",\"title\":\"Manual Test\",\"content\":\"This is a manual test\",\"metadata\":{\"phoneNumber\":\"+918249994855\"}}"

# Get user notifications
curl http://localhost:3000/users/user123/notifications
```

Or using a tool like Postman or Insomnia.