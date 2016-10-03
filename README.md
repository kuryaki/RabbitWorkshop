# RabbitMQ for microservices
JSConf Colombia 2016


## Workshop Steps

 [x] simple in memory login/register service (monolith?)
 [ ] make register send an email via simple producer consumer (prod/consumer)
 [ ] agregate both services in a loggin service (pub/sub)
 [ ] add loggin normally to show how you need to alter routes
 [ ] add a single endpoint to handle `/resources` and publish all of the verbs as `verb.resource`
 [ ] implement RPC service to handle crud
 [ ] handle failure nacks + service monitoring
