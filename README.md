# RabbitMQ for microservices
JSConf Colombia 2016


## Workshop Steps

0. Make register send an email via simple producer consumer (prod/consumer)
1. Add another consumer to the key to send analitycs (pub/sub)
2. Add a single endpoint to handle RPC for `/resources`
3. Add RPC service to handle crud for CRUD as `action.resource`
4. Reuse `mailer` from `resourcer` on resource delete
4. Handle failure nacks + service monitoring
