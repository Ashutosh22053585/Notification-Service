@echo off
echo =======================================
echo    STARTING NOTIFICATION SERVICE
echo =======================================
echo.
echo Server logs will appear below:
echo.
set PORT=3000
node src/server.js
echo.
echo =======================================
echo    SERVER STOPPED
echo =======================================
pause