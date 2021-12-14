import express from 'express'
import { getAllUser } from '../controller/UserController.js'

// 创建路由对象
const router = new express.Router()

// 挂载路由规则
router.get('/user', getAllUser)

// 使用 ES6 默认导出语法，将路由对象导出
export default router
