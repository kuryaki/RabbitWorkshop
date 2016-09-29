# RabbitMQ for microservices
JSConf Colombia 2016


## TODO

 [] Slides ?
  [] Motivation of the workshop is to show the usage of the tool not to make it a golden hammer
    [] Move and release indepently
    [] Own your uptime
    [] Use the "Best" tool for the job
    EVERYTHING IS A TRADEOFF
    [] Complexity
    [] Timeouts (RPC)
  [] Talk about when to use microservices (start monolithic)
  [] HTTP vs MQ
  [] AMQP
   [] Exchanges: direct/fanout/topic
   [] Queues: durable/exclusive

 [] Tools
  [x] Use Express
  [x] Setup CloudAMQP
   [x] amqp://pxdaoysu:cEwwoFK3n1rvg3MVNdXMmcbyCWmypYrf@wildboar.rmq.cloudamqp.com/pxdaoysu
   [x] https://wildboar.rmq.cloudamqp.com/#/

 [] Workshop Steps
  [] simple in memory login/register service
  [] make register send an email via simple producer consumer (prod/consumer)
  [] agregate both services in a loggin service (pub/sub)
  [] add loggin normally to show how you need to alter routes
  [] add a single endpoint to handle `/resources` and publish all of the verbs as `verb.resource`
  [] implement RPC service to handle crud
