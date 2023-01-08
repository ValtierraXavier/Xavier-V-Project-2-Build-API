import {Router} from 'express'
import * as controller from '../controllers/quoteController.js'

const router = Router()

router.get('/', controller.getQuotes)
router.get('/:id', controller.getQuote)
router.post('/create', controller.createQuote)
router.put('/update/:id', controller.updateQuote)
router.delete('/delete/:id', controller.deleteQuote)

export default router