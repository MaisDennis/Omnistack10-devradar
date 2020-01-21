const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack10:omnistack10@omnistack-ufvxl.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

// app.listen(3333);
server.listen(3333);

// Métodos http: get, post, put, delete

// Tipos de parametros: 
  // Query Params: request.query (Filtros, ordenação, paginação...)
  // Route Params: request.params (Identificar um recurso na alteração ou remoção)
  // Body: request.body (Dados para a criação ou alteração de um registro)

// MongoDB (Não-relacional)

// app.get('/users', (request, response) => {
//  app.delete('/users/:id', (request, response) => {
  // levar esses comandos para Routes.

  // console.log(request.query);
  // console.log(request.params);

  // return response.send('Hello World');
  // return response.json({ message: 'Hello Omnistack'});
// });

