const jackrabbit = require('jackrabbit');
const rabbit = jackrabbit('amqp://localhost');
const exchange = rabbit.topic('jsconf');

const consumer = exchange.queue({ key: 'register.user', name: 'mailer' });

consumer.consume((data, ack) => {
  console.log(`sending email to ${data.email}`);
  ack();
});