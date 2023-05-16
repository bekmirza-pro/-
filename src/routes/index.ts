import express, { Router } from 'express'
import path from 'path'
import sampleRouter from './sample'
import adminRouter from './admin'
import orderRouter from './order'
import categoryRouter from './category'
import userRouter from './user'

const router = Router({ mergeParams: true })

router.use('/api/file', express.static(path.join(__dirname, '../../../uploads')))
router.use('/sample', sampleRouter)
router.use('/admin', adminRouter)
router.use('/user', userRouter)
router.use('/order', orderRouter)
router.use('/category', categoryRouter)

export default router
