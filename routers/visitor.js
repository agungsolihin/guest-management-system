const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

/**
 * Visitor Router
 */

router.get('/', visitorController.homepage);
router.get('/add', visitorController.addVisitor);
router.post('/add', visitorController.postVisitor);






module.exports = router;