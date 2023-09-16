const express = require('express');
const { isAuthenticated } = require('../middleware/authMiddleware');
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require('../controllers/chatControllers');
const router = express.Router();

router.route('/').post(isAuthenticated, accessChat);
router.route('/').get(isAuthenticated, fetchChats);
router.route('/group').post(isAuthenticated, createGroupChat);
router.route('/rename').put(isAuthenticated, renameGroup);
router.route('/groupadd').put(isAuthenticated, addToGroup);
router.route('/groupremove').put(isAuthenticated, removeFromGroup);

module.exports = router;
