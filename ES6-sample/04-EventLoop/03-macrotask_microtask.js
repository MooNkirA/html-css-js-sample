/* 
  宏任务和微任务执行顺序分析案例2 (面试题)
*/

console.log('1')

setTimeout(() => {
  console.log('2')
  new Promise(resolve => {
    console.log('3')
    resolve()
  }).then(() => console.log('4'))
})

new Promise(resolve => {
  console.log('5')
  resolve()
}).then(() => console.log('6'))

setTimeout(() => {
  console.log('7')
  new Promise(resolve => {
    console.log('8')
    resolve()
  }).then(() => console.log('9'))
})

/* 
  最终结果输出是：156234789

  1. 先执行所有的同步任务输出：1、5
  2. 再执行第1个宏任务中的同步任务输出：2、3
  3. 再执行第1个宏任务的微任务输出：4
  4. 再执行第2个宏任务中的同步任务输出：7、8
  5. 再执行第2个宏任务的微任务输出：9
*/
