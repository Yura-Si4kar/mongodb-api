const { Router } = require('express');
const router = new Router();
const BbqsController = require('../controllers/BbqsController');

router.get('/', BbqsController.getAll)
router.post('/', BbqsController.create)
router.get('/:id', BbqsController.getOne)
router.put('/:id', BbqsController.updateOne)
router.delete('/:id', BbqsController.delete)

module.exports = router;