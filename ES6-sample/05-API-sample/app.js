import express from 'express'
// 默认导入路由对象
import userRouter from './router/user_router.js'

const app = express()

// 挂载用户路由模块
app.use('/api', userRouter)

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
