import { Router } from 'express'
import { CategoryController } from '../controllers/category'
import { CategoryValidator } from '../validators/category'
import { Middleware } from '../middleware/auth'
import multer from '../middleware/multer'

const router = Router({ mergeParams: true })
const controller = new CategoryController()
const validator = new CategoryValidator()
const middleware = new Middleware()

const upload = multer(['image/jpeg' , 'image/png'], 10).single('images')


router.route('/all').get(controller.getAll)
router.route('/create').post(middleware.auth(['admin']), upload, validator.create, controller.create)
router
    .route('/:id')
    .get(controller.get)
    .patch(middleware.auth(['admin']), upload, validator.update, controller.update)
    .delete(middleware.auth(['admin']), controller.delete)

export default router
