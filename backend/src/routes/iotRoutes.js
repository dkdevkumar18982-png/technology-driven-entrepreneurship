const express = require('express');
const router = express.Router();
const iotController = require('../controllers/iotController');

// IoT endpoints
router.get('/adoption-metrics', iotController.getAdoptionMetrics);
router.get('/case-studies', iotController.getIoTCaseStudies);
router.post('/analysis', iotController.performIoTAnalysis);
router.get('/industry-trends', iotController.getIndustryTrends);

module.exports = router;
