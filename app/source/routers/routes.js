const index = require('../controllers/index')

const express = require('express');
const Router = express.Router();

Router.get('/', index.getMethodController);

module.exports = Router; 