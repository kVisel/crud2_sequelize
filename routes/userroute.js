module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const controller = require('../controllers/usercontroller');

    router.get('/users', controller.index);
    router.post('/user', controller.store);
    router.get('/user/:id', controller.read);
    router.put('/user/:id', controller.update);
    router.delete('/user/:id', controller.delete);

    app.use('/api', router);
}