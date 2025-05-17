/**
 * Send SMS Notification
 * 
 * This script sends an SMS notification directly without using the API.
 */

const smsService = require('./src/services/smsService');

async function sendSMS() {
  console.log('Sending SMS notification to +918249994855...');
  
  const notification = {
    userId: 'user123',
    type: 'SMS',
    title: 'Important Message',
    content: 'Hello! This is a test notification from your notification service.',
    metadata: {
      phoneNumber: '+918249994855'
    }
  };
  
  try {
    const result = await smsService.sendSMS(notification);
    console.log(`SMS sent successfully: ${result}`);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}

// Run the function
sendSMS().then(() => {
  console.log('Done!');
});