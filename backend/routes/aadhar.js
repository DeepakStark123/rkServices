const express = require('express');
const router = express.Router();
const aadharController = require('../controllers/aadharController');

// Define routes for Aadhar
router.post('/', aadharController.createAadhar);
router.get('/', aadharController.getAllAadhars);
router.get('/:id', aadharController.getAadharById);
router.put('/:id', aadharController.updateAadhar);
router.delete('/:id', aadharController.deleteAadhar);

module.exports = router;
