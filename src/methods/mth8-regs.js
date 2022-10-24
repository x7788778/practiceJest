/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-10-22 21:14:30
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-10-24 17:30:26
 * @FilePath: /jest-test/src/methods/mth8-regs.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const str = 'dsadas'
const reg = /^\s+/

console.time('reg')
for(let i = 0; i<100*1000; i++){
    reg.test(str)
}

console.timeEnd('reg')