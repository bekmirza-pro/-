import { Router } from 'express'
import { OrderController } from '../controllers/order'
import { OrderValidator } from '../validators/order'
import { Middleware } from '../middleware/auth'

const router = Router({ mergeParams: true })
const controller = new OrderController()
const validator = new OrderValidator()
const middleware = new Middleware()


router.route('/all').get(middleware.auth(['admin', 'user']), controller.getAll)
router
    .route('/create')
    .post(middleware.auth(['admin', 'user']), validator.create, controller.create)
router.route('/filter/:id').get(controller.getAll)
router
    .route('/:id')
    .get(middleware.auth(['admin', 'user']), controller.get)
    .patch(middleware.auth(['admin', 'user']), validator.update, controller.update)
    .delete(middleware.auth(['user']), controller.delete)

export default router
