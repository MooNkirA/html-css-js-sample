/* 
  宏任务和微任务执行顺序分析案例1 (面试题)
*/

setTimeout(() => console.log('1'))

new Promise(resolve => {
  console.log('2')
  resolve()
}).then(res => console.log('3'))

console.log('4')

/* 
  最终结果输出是：2431

  先执行所有的同步任务：行号 8、12 的代码
  再执行微任务：行号 10 的代码
  再执行下一个宏任务： 行号 5 的代码
*/
