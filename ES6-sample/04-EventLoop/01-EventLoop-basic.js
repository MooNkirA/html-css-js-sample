import { getResult } from '../utils/util.js'

console.log('A')

// 模拟请求获取数据
getResult(3).then(res => console.log('B'))

setTimeout(() => console.log('C'), 0)

console.log('D')

/* 
  最终的输出结果是：ADCB
  
  A 和 D 属于同步任务。会根据代码的先后顺序依次被执行
  C 和 B 属于异步任务。它们的回调函数会被加入到任务队列中，等待主线程空闲时再执行
*/
