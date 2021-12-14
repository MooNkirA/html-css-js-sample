/* 导入默认导出 */
import fn from './export-02-default.js'

console.log(fn())

/* 本质上，`export default` 就是输出一个叫做 `default` 的变量或方法  */
import { default as obj } from './export-03-defaultObject.js'

console.log(obj.name)
console.log(obj.age)
console.log(obj.foo())
