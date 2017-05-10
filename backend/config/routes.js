"use strict";

var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');

// root path:
router.get('/', pagesController.welcome);

// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);

router.get('index', function (req, res, next) {
  return res.render('views/pages/index');
});

router.get('/about', function (req, res, next) {
  return res.render('views/pages/about');
});


module.exports = router;
