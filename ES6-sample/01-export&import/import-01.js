/* 导入单独导出的变量
  import` 后面的 `from` 指定模块文件的位置，
  可以是相对路径，也可以是绝对路径，并且 `.js` 后缀可以省略。
*/
import { str as string, sum } from './export-01.js'

console.log('单独导出的变量str 重命名为 string: ', string)
console.log('单独导出的变量sum: ', sum)

/* 导入使用大括号`{}`导出的变量 */
import { firstName, lastName, age } from './export-01.js'
console.log('使用大括号`{}`导出的变量firstName: ', firstName)
console.log('使用大括号`{}`导出的变量lastName: ', lastName)
console.log('使用大括号`{}`导出的变量age: ', age)

/* 导入导出函数或类（class） */
import { multiply, Person } from './export-01.js'
console.log('导出的函数multiply: ', multiply(2, 3))
console.log('导出的类Person: ', new Person('石原里美', 30))

/* 导入使用 as 关键重命名变量 */
import { personAge, fn1, fn2, fun2 } from './export-01.js'
console.log('使用 as 关键重命名变量personAge: ', personAge)
console.log('使用 as 关键重命名函数fn1: ', fn1())
console.log('使用 as 关键重命名函数fn2: ', fn2())
console.log('使用 as 关键重命名并多次导出的fun2: ', fun2())
