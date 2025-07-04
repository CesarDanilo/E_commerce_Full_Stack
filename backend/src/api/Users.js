const express = require('express');
const rotas = express.Router();

const UsersControllers = require('../controllers/Users');
const validationCreateLogin = require('../middewares/Users/validationCreateLogin');
const validationLogin = require('../middewares/Users/validationLogin');
const userLogin = require('../middewares/Users/userLogin');
const checktoken = require('../middewares/Users/checkToken');
const session = require('../middewares/Users/session');

rotas.get('/', UsersControllers.listarUsers);
rotas.get('/usuario/:id', checktoken, userLogin);
rotas.post('/auth/createuser', validationCreateLogin, UsersControllers.inserirUsers);
rotas.post('/auth/login', validationLogin, session);
rotas.put('/:id', UsersControllers.editarUsers);
rotas.delete('/:id', UsersControllers.excluirUsers);

module.exports = rotas;