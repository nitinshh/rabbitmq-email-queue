module.exports = {
  rabbitmq: {
    url: 'amqp://localhost',  // RabbitMQ connection URL
    queue: 'email-queue',      // Queue name for email jobs
  },
  email: {
    service: 'gmail',           // Example email service
  },
};
