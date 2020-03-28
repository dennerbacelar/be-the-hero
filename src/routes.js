const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const OngsController = require('./controllers/ongController');
const CasosController = require('./controllers/casosController');
const PerfilController = require('./controllers/perfilController');
const SessaoController = require('./controllers/SessaoController');

const routes = express.Router();

routes.post('/sessao', SessaoController.create);

routes.get('/ongs', OngsController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        cidade: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngsController.create);

routes.get('/perfil', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), PerfilController.index)

routes.get('/casos', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), CasosController.index);

routes.post('/casos', CasosController.create);

routes.delete('/casos/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), CasosController.delete);


module.exports = routes;