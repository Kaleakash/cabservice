const express = require('express');
const router = express.Router();
const AreaFormController = require('../controllers/areaController');
const checkAuth = require('../middleware/check-auth');
const checkAdmin = require('../middleware/check-admin');

router.get('/findAll',AreaFormController.getAllAreaDetails);

router.post('/create',AreaFormController.createAreaForm);



module.exports = router;
