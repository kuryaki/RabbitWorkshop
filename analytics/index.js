const jackrabbit = require('jackrabbit');
const rabbit = jackrabbit('amqp://localhost');
const exchange = rabbit.topic('jsconf');

const consumer = exchange.queue({ keys: ['*.user'], exclusive: true, name: 'analytics' });

consumer.on('ready', () => {
  console.log('Analytics service up and ready');
});

consumer.consume((data, ack, nack, metadata) => {
  console.log(`processing user analytics for ${metadata.fields.routingKey}:`, data);
  ack();
});