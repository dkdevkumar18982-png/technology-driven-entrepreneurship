const express = require('express');
const router = express.Router();
const blockchainController = require('../controllers/blockchainController');

// Blockchain endpoints
router.get('/transactions', blockchainController.getTransactions);
router.get('/startups', blockchainController.getBlockchainStartups);
router.post('/analyze', blockchainController.analyzeImplementation);
router.get('/smart-contracts', blockchainController.getSmartContracts);

module.exports = router;
