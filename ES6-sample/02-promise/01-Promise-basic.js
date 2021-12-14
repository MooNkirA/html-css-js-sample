/* 
  Promise 基础使用示例
    `Promise` 对象是一个构造函数，用来生成 `Promise` 实例。
    `Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 JavaScript 引擎提供，不用开发者定义。
      - `resolve` 函数的作用是，将 `Promise` 对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
      - `reject` 函数的作用是，将 `Promise` 对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
*/
const getSomething = time => {
  return new Promise((resolve, reject) => {
    if (time > 100) {
      setTimeout(() => {
        // 成功返回
        resolve('返回数据成功')
      }, time)
    } else {
      reject('返回数据失败')
    }
  })
}

getSomething(300)
  .then(res => {
    console.log('Promise 对象执行 resolve 方法后执行的回调')
    console.log(res)
  })
  .catch(err => {
    console.log('Promise 对象执行 reject 方法后执行的回调')
    console.log(err)
  })
