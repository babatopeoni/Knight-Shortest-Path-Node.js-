var express = require('express');
var router = express.Router();
var knightPathCalculator = require('../controllers/knightPathCalculator');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* POST knight position */
router.post('/get_shortest_path', knightPathCalculator.getShortestPath);


module.exports = router;
