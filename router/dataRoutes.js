import {Router} from 'express'
import * as controller from '../controllers/dataController.js'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.post('/create', controller.createData)
router.put('/update/:id', controller.updateData)
router.delete('/delete/:id', controller.deleteData)

export default router