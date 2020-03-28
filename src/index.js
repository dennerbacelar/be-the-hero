const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

/**
 * Métodos HTTP
 * 
 * GET: Buscar/Listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados  na rota  após '?' (Filtros, paginação, etc)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou altera recursos
 */

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());
app.listen(process.env.PORT || '6969');