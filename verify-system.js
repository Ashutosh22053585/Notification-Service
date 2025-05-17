/**
 * Notification Service System Verification
 * 
 * This script verifies that all components of the notification service are working correctly.
 */

const emailService = require('./src/services/emailService');
const smsService = require('./src/services/smsService');
const inAppService = require('./src/services/inAppService');
const queueService = require('./src/queue/queueService');
const notificationService = require('./src/services/notificationService');
const mockService = require('./src/services/mockService');

async function verifySystem() {
  console.log('=======================================');
  console.log('    NOTIFICATION SERVICE VERIFICATION');
  console.log('=======================================\n');

  // 1. Verify Email Service
  console.log('1. Verifying Email Service...');
  try {
    const emailNotification = {
      userId: 'test-user',
      type: 'EMAIL',
      title: 'Test Email',
      content: 'This is a test email notification',
      metadata: {
        email: 'asutosh.om27@gmail.com'
      }
    };
    
    const emailResult = await emailService.sendEmail(emailNotification);
    console.log(`   Email Service: ${emailResult ? 'WORKING' : 'FAILED'}`);
  } catch (error) {
    console.error('   Email Service: ERROR', error.message);
  }
  console.log();

  // 2. Verify SMS Service
  console.log('2. Verifying SMS Service...');
  try {
    const smsNotification = {
      userId: 'test-user',
      type: 'SMS',
      title: 'Test SMS',
      content: 'This is a test SMS notification',
      metadata: {
        phoneNumber: '+918249994855'
      }
    };
    
    const smsResult = await smsService.sendSMS(smsNotification);
    console.log(`   SMS Service: ${smsResult ? 'WORKING' : 'FAILED'}`);
  } catch (error) {
    console.error('   SMS Service: ERROR', error.message);
  }
  console.log();

  // 3. Verify In-App Service
  console.log('3. Verifying In-App Service...');
  try {
    const inAppNotification = {
      userId: 'test-user',
      type: 'IN_APP',
      title: 'Test In-App',
      content: 'This is a test in-app notification'
    };
    
    const inAppResult = await inAppService.sendInApp(inAppNotification);
    console.log(`   In-App Service: ${inAppResult ? 'WORKING' : 'FAILED'}`);
  } catch (error) {
    console.error('   In-App Service: ERROR', error.message);
  }
  console.log();

  // 4. Verify Queue Service
  console.log('4. Verifying Queue Service...');
  try {
    await queueService.connect();
    console.log(`   Queue Service: ${queueService.simulateQueue ? 'SIMULATED (Working)' : 'CONNECTED TO RABBITMQ'}`);
  } catch (error) {
    console.error('   Queue Service: ERROR', error.message);
  }
  console.log();

  // 5. Verify Mock Service
  console.log('5. Verifying Mock Service...');
  try {
    const mockNotification = mockService.createNotification({
      userId: 'test-user',
      type: 'EMAIL',
      title: 'Test Mock',
      content: 'This is a test mock notification'
    });
    
    console.log(`   Mock Service: ${mockNotification._id ? 'WORKING' : 'FAILED'}`);
  } catch (error) {
    console.error('   Mock Service: ERROR', error.message);
  }
  console.log();

  // 6. Verify Notification Processing
  console.log('6. Verifying Notification Processing...');
  try {
    const testNotification = {
      _id: `test-${Date.now()}`,
      userId: 'test-user',
      type: 'SMS',
      title: 'Test Processing',
      content: 'This is a test notification for processing',
      status: 'PENDING',
      retryCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      metadata: {
        phoneNumber: '+918249994855'
      }
    };
    
    const processResult = await notificationService.processNotification(testNotification);
    console.log(`   Notification Processing: ${processResult ? 'WORKING' : 'FAILED'}`);
  } catch (error) {
    console.error('   Notification Processing: ERROR', error.message);
  }
  console.log();

  // 7. Verify End-to-End Flow
  console.log('7. Verifying End-to-End Flow...');
  try {
    const endToEndNotification = {
      userId: 'test-user',
      type: 'EMAIL',
      title: 'Test End-to-End',
      content: 'This is a test notification for end-to-end flow',
      metadata: {
        email: 'asutosh.om27@gmail.com'
      }
    };
    
    const createdNotification = await notificationService.createNotification(endToEndNotification);
    console.log(`   End-to-End Flow: ${createdNotification ? 'WORKING' : 'FAILED'}`);
  } catch (error) {
    console.error('   End-to-End Flow: ERROR', error.message);
  }
  console.log();

  console.log('=======================================');
  console.log('    VERIFICATION COMPLETED');
  console.log('=======================================');
}

// Run the verification
verifySystem().catch(error => {
  console.error('Verification failed:', error);
});