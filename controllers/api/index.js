const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
// for now, we present posts as games to users
router.use('/games', postRoutes);

module.exports = router;
