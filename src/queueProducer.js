const amqp = require('amqplib');
const config = require('./config');
const { generateRandomEmail } = require('./emailGenerator');

async function addEmailsToQueue(count) {
  try {
    const connection = await amqp.connect(config.rabbitmq.url); // Correct RabbitMQ URL
    const channel = await connection.createChannel();
    
    // Ensure the queue name matches config.rabbitmq.queue
    await channel.assertQueue(config.rabbitmq.queue, { durable: true });

    for (let i = 0; i < count; i++) {
      const email = generateRandomEmail();
      await channel.sendToQueue(
        config.rabbitmq.queue, 
        Buffer.from(JSON.stringify(email)), 
        { persistent: true }
      );
      console.log(`Added email ${i + 1} to queue`);
    }

    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error adding emails to queue:', error);
  }
}

module.exports = { addEmailsToQueue };
