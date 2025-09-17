require('dotenv').config();
const fastifyStatic = require('@fastify/static'); 
const path = require('path');

const fastify = require('fastify')({
  logger: false
})

const PORT = process.env.PORT || 3000;

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../build'),
  prefix: '/'
})

fastify.get('/main/', function (req, reply) {
  reply.sendFile('index.html');
})

fastify.setNotFoundHandler((req, reply) => {
  reply.sendFile('index.html');
})

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    console.log('Server running on: http://localhost:' + PORT);
  } catch(err) {
    console.log('Server launch error: ' + err);
    process.exit(1);
  }
}

start();