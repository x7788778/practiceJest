/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-10-01 01:41:43
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-10-24 17:31:28
 * @FilePath: /jest-test/src/methods/mthThree-findSum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** 
 * 求和
 */


/**
 * 查找两数之和为某个值的两个数
 * 时间复杂度 ，o(n2)
 * @param {array} arr 
 * @param {number} num 
 * @returns 
 */


function fundSum(arr,num) {
    let res = []
    let l = arr.length
    if(arr.length == 0) return res

    for(let i = 0; i<= l; i++){
        let n1 = arr[i]
        let flag = false //是否得到结果， 提前停止循环用
        for(let j = i+1; j < length; j++){
            let n2 = arr[j]
            let sum = n1 + n2
            if(sum === num){
                res.push(n1)
                res.push(n2)
                flag == true
                break
            }
        }
        if(flag) break
    }

    return res
}

/**
 * 找和
 * 针对递增数组，可以考虑二分思想来提高算法效率
 * @param {array} arr 
 * @param {number} num 
 */
function findSum2(arr,num){
    let res = []
    let l = arr.length
    if(l == 0) return []
    let head = 0
    let tail = l-1
    while(head < tail) {
        if(arr[head] + arr[tail] < num) {
            tail--
        } else if(arr[head] + arr[tail] > num) {
            head++
        } else if(arr[head] + arr[tail] === num) {
            res.push(arr[head])
            res.push(arr[tail])
            break
        } 
    }

    return res 
}