// routes/habitRoutes.js
const express = require('express');
const { addHabit, getHabits, deleteHabit } = require('../controllers/habitController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/habits', authMiddleware, addHabit);
router.get('/habits', authMiddleware, getHabits);
router.delete('/habits/:id', authMiddleware, deleteHabit);

module.exports = router;
