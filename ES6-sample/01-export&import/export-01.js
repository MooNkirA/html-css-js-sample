/* 单独导出变量 */
export const str = '我是一个字符串'
export const sum = 1 + 2 + 3

// 使用大括号`{}`指定所要导出的一组变量。
const firstName = 'MooN'
const lastName = 'Zero'
const age = 23

export { firstName, lastName, age }

// `export` 命令除了导出变量，还可以导出函数或类（class）
export function multiply(x, y) {
  return x * y
}

// `export` 命令除了导出变量，还可以导出函数或类（class）
export class Person {
  constructor(uname, age) {
    this.uname = uname
    this.age = age
  }
}

const function1 = () => {
  return '我是 function1 函数'
}
const function2 = () => {
  return '我是 function2 函数'
}

// 通常情况下，`export` 导出的变量就是原文件中的变量名称，但是可以使用 `as` 关键字重命名，不同的重命名后可以多次同一个变量
export { age as personAge, function1 as fn1, function2 as fn2, function2 as fun2 }

// 默认导出可以与单独导出混合使用
export default { a: 'a', b: 'b', foo: () => '我是foo函数' }
