import {Router} from 'express'
import * as controller from '../controllers/dataController.js'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/', controller.createData)
router.put('/:id', controller.updateData)
router.delete('/:id', controller.deleteData)

export default router