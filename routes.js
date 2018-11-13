const

	express = require('express'),

	router = express.Router(),

	IndexController = require('./controllers/IndexController');

// Index API.
router.route('/').get(IndexController.index);

module.exports = router;
