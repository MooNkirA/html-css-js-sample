/* 使用 * 与 as 关键字，代表全部导入 */
import * as all from './export-01.js'

console.log(all.str)
console.log(all.sum)
console.log(all.multiply(2, 4))
console.log(new all.Person('xx', 11))

/* 导入默认与单独共用情况 */
import defaultObj, { Person, firstName } from './export-01.js'

console.log(defaultObj)
console.log(new Person('长泽雅美', 29))
console.log(firstName)
