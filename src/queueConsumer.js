const amqp = require('amqplib');
const config = require('./config');
const { sendEmail } = require('./emailSender');

async function startConsumer() {
  try {
    const connection = await amqp.connect(config.rabbitmq.url);
    const channel = await connection.createChannel();
    
    await channel.assertQueue(config.rabbitmq.queue, { durable: true });
    channel.prefetch(1);

    console.log('Waiting for messages...');

    channel.consume(config.rabbitmq.queue, async (msg) => {
      if (msg !== null) {
        const emailData = JSON.parse(msg.content.toString());
        console.log('Processing email:', emailData.to);
        await sendEmail(emailData);
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error('Error in consumer:', error);
  }
}

module.exports = { startConsumer };
