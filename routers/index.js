const { Router } = require('express');
const router = new Router();
const categoriesRouter = require('./categoriesRouter.js');
const { categories } = require('../config.js');

categories.forEach((category) => router.use(`/${category}`, categoriesRouter))

module.exports = router;