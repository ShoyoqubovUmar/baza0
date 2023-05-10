const{Router} = require('express');

const {
    index, 
    create,
    show,
    remove,
    edit
} = require('../controllers/students');
const router = Router()

router.get('/', index)
router.get('/:id', show)
router.post('/', create)
router.delete('/:id', remove)
router.put('/:id', edit)

module.exports = router