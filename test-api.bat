@echo off
echo =======================================
echo    TESTING NOTIFICATION SERVICE API
echo =======================================
echo.

echo 1. Testing root endpoint...
curl -s http://localhost:3000/
echo.
echo.

echo 2. Sending SMS notification...
curl -s -X POST http://localhost:3000/notifications -H "Content-Type: application/json" -d "{\"userId\":\"user123\",\"type\":\"SMS\",\"title\":\"Test SMS\",\"content\":\"This is a test SMS notification\",\"metadata\":{\"phoneNumber\":\"+918249994855\"}}"
echo.
echo.

echo 3. Sending Email notification...
curl -s -X POST http://localhost:3000/notifications -H "Content-Type: application/json" -d "{\"userId\":\"user123\",\"type\":\"EMAIL\",\"title\":\"Test Email\",\"content\":\"This is a test email notification\",\"metadata\":{\"email\":\"asutosh.om27@gmail.com\"}}"
echo.
echo.

echo 4. Sending In-App notification...
curl -s -X POST http://localhost:3000/notifications -H "Content-Type: application/json" -d "{\"userId\":\"user123\",\"type\":\"IN_APP\",\"title\":\"Test In-App\",\"content\":\"This is a test in-app notification\"}"
echo.
echo.

echo 5. Getting user notifications...
curl -s http://localhost:3000/users/user123/notifications
echo.
echo.

echo =======================================
echo    TEST COMPLETED
echo =======================================
pause