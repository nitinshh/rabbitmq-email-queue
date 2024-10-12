const { addEmailsToQueue } = require('./src/queueProducer');
const { startConsumer } = require('./src/queueConsumer');

async function main() {
  try {
    await addEmailsToQueue(50);
    console.log('All emails added to queue');
    
    // Start the consumer
    await startConsumer();
  } catch (error) {
    console.error('Error in main:', error);
  }
}

main();