// Mock email sender for practice purposes
async function sendEmail({ to, subject, body }) {
    try {
      // Simulating email sending without actually sending
      console.log(`Pretending to send email to: ${to}`);
      console.log(`Subject: ${subject}`);
      console.log(`Body: ${body}`);
      
      // Simulate delay to mimic real email sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Email successfully "sent" to ${to}`);
    } catch (error) {
      console.error(`Failed to send email to ${to}:`, error);
    }
  }
  
  module.exports = { sendEmail };
  