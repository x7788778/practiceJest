/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-10-14 21:44:50
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-10-24 17:31:35
 * @FilePath: /jest-test/src/methods/mth5-findContinuousChar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

interface IRes {
    char:string,
    length: number
}
/**
 * 
 * @param str 
 * @returns 
 * 
 * 技术用到双指针。凡事内嵌循环都可以考虑使用双针针
 * 1、定义指针i，j。j不动，i继续移动
 * 2、如果i和j的值相等，则i继续移动
 * 3、知道i和j值不想等，记录处理，让j追上i，继续 第一步
 */
function findContinuousChar1(str){
    let l = str.length
    let res = {
        char:"",
        length: 0
    }
    if(l === 0) {
        return res
    }
    let length = 0
    for(let i = 0; i<l; i++){
        length = 0
        for(let j = i; j < l; j++){ //i为每组第一个，每次循环j从i的位置开始循环
            if(str[j] === str[i]){
                length++
                // char = str[i]
            } 

            if(str[j] !== str[i] || j === l - 1) {
                if(length>res.length){ //记录次字符，次数
                    res.length = length
                    res.char = str[i]
                }
                if(i < l-1){
                    i = j-1  //跳步,此时j为下组第一个，breck后，重新循环i会++，所以为确保i为下组第一个，故需要i=j-1
                }
                break //此时已经开始下一组，需要从外层循环开始
            }


        }
    }

    return res
}



/** 
 * 单元测试
 */

// describe('连续字符和长度',()=>{
//     it('正常情况',()=>{
//         const str = '11222333345555555567789'
//         const res = findContinuousChar1(str)
//         expect(res).toEqual({char:'5',length:8})
//     })
//     it('空字符串',()=>{
//         const str = ''
//         const res = findContinuousChar1(str)
//         expect(res).toEqual({char:'',length:0})
//     })
//     it('无连续字符',()=>{
//         const str = '1234567'
//         const res = findContinuousChar1(str)
//         expect(res).toEqual({char:'1',length:1})
//     })
//     it('全部是连续字符',()=>{
//         const str = '1111111'
//         const res = findContinuousChar1(str)
//         expect(res).toEqual({char:'1',length:7})
//     })

// })