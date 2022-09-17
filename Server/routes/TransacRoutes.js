const express = require('express');
const { createTransac, getAllTransac, updateTransac, getTransDetails, newDealWhatsapp } = require('../controllers/TransacController');

const router = express.Router();

router.post('/add', createTransac);
router.get('/:id', getAllTransac);
router.get('/info/:id', getTransDetails)
router.put('/update', updateTransac);
router.post('/newDeal', newDealWhatsapp);

module.exports = router;