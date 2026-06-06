const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// AI Analysis endpoints
router.post('/analyze-sentiment', aiController.analyzeSentiment);
router.get('/trend-analysis', aiController.getTrendAnalysis);
router.post('/predict-success', aiController.predictStartupSuccess);
router.get('/nlp-analysis', aiController.performNLPAnalysis);

module.exports = router;
