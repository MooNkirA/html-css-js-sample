/* 
  async/await 的基础使用示例
*/
import { getResult } from '../utils/util.js'

console.log('A')

/* 
  1. 如果在 function 中使用了 await，则 function 必须被 async 修饰
  2. 在 async 方法中，第一个 await 之前的代码是同步执行，await 之后的代码会异步执行
    即下面示例中，getAllResult 方法调用后会马上console.log('B')，然后是异步执行getResult方法，
    虽然 getAllResult 方法内的多个 await 修饰的方法是同步执行，但会先 getAllResult 方法外的逻辑
*/
async function getAllResult() {
  console.log('B')
  const r1 = await getResult(2)
  console.log(r1)
  const r2 = await getResult(3)
  console.log(r2)
  console.log('D')
}

getAllResult()

console.log('C')

/* 
  最终的输出的结果：

  A
  B
  84ms后将返回数据
  C
  延迟84ms后返回的数据
  679ms后将返回数据
  延迟679ms后返回的数据
  D
*/
