/**
 * 生成随机len位数字
 */
export const randomLenNum = len => {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substr(0, len ? len : 4)
  return Number(random)
}

/**
 * 模拟请求返回数据
 * @param {Number} len 设置延迟时间的位数（单位：ms）
 */
export const getResult = len => {
  return new Promise((resolve, reject) => {
    // 获取随便延迟的时间位数
    const delay = randomLenNum(len)
    console.log(`${delay}ms后将返回数据`)

    setTimeout(() => {
      // 返回
      resolve(`延迟${delay}ms后返回的数据`)
    }, delay)
  })
}
