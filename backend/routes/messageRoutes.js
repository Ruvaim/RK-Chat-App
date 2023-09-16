const express = require('express');
const { isAuthenticated } = require('../middleware/authMiddleware');
const {
  sendMessage,
  allMessages,
} = require('../controllers/messageControllers');

const router = express.Router();

router.route('/').post(isAuthenticated, sendMessage);
router.route('/:chatId').get(isAuthenticated, allMessages);

module.exports = router;
