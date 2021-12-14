/* 
  Promise.all() 方法使用示例
    方法参数是多个异步操作的数组。方法会等所有的异步操作全部结束后才会执行下一步 then 的回调。
    then 方法的参数返回值为 all 方法参数数组中 `Promise` 实例的顺序的返回结果
*/
import { getResult } from '../utils/util.js'

const promiseArr = [getResult(3), getResult(3), getResult(3)]

Promise.all(promiseArr).then(([res1, res2, res3]) => {
  console.log(res1)
  console.log(res2)
  console.log(res3)
})
