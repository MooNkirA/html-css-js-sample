import db from '../db/index.js'

// 使用 ES6 的按需导出语法，将 getAllUser 方法导出
export async function getAllUser(req, res) {
  try {
    // db.query() 函数的返回值是 Promise 实例对象。所以可以使用 async/await 进行异步处理简化
    const [rows] = await db.query('select id, name, gender from user')
    res.send({
      status: 0,
      message: '获取用户列表数据成功！',
      data: rows,
    })
  } catch (err) {
    res.send({
      status: 1,
      message: '获取用户列表数据失败！',
      desc: err.message,
    })
  }
}
