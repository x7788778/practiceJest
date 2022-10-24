/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-09-14 23:07:23
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-09-30 17:33:11
 * @FilePath: /jest-test/app.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 * 
 */
const obj = require('./app.js')

const {foo,bar} = obj

test('方法一',()=>{
    // 对象的对比使用toEquial,值的对比，用toBe
    expect(foo(111)).toBe('111个数foo')
})
test('方法二',()=>{
    expect(bar(111)).toBe('111个数bar')
})


// 一组的测试使用describe示例
// describe('要测试的方法',()=>{
//     it('情况1',()=>{
        
//     })
//     it('情况2',()=>{

//     })
//     it('情况3',()=>{

//     })
// })
