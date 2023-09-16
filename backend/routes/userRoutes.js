const express = require('express');
const {
  registerUser,
  authUser,
  allUsers,
} = require('../controllers/userControllers');
const { isAuthenticated } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(registerUser).get(isAuthenticated, allUsers);
router.post('/login', authUser);

module.exports = router;
