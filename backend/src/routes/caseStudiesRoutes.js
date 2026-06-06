const express = require('express');
const router = express.Router();
const caseStudiesController = require('../controllers/caseStudiesController');

// Case Studies endpoints
router.get('/', caseStudiesController.getAllCaseStudies);
router.get('/:id', caseStudiesController.getCaseStudyById);
router.post('/', caseStudiesController.createCaseStudy);
router.put('/:id', caseStudiesController.updateCaseStudy);
router.get('/by-technology/:tech', caseStudiesController.getCaseStudiesByTechnology);
router.get('/by-industry/:industry', caseStudiesController.getCaseStudiesByIndustry);

module.exports = router;
