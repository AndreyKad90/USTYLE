import {Router} from 'express';

const router = Router();

router.use('/authentication', require('./authentication'));
router.use('/users', require('./users'));

module.exports = router;
