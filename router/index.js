import {Router} from 'express'
import quoteRoutes from './quoteRoutes.js'
import infoRoutes from './dataRoutes.js'
const router = Router()

router.get('/', (req, res)=>{
    res.send('You are at the root of this API; carry on.')
})

router.use('/quote', quoteRoutes)
router.use('/info', infoRoutes)

export default router