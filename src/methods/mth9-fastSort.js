/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-10-22 21:50:14
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-10-25 22:17:49
 * @FilePath: /jest-test/src/methods/mth9-fastSort.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * 
 * @param {array} arr 
 * 快速排序splice
 * 1、找到中间位置midVal
 * 2、便利数组，小midVal于放left，大于midVal放right
 * 3、递归，最后concat拼接，返回
 */

function fastSort1(arr){

    const length = arr.length
    if(length<2) return arr

    let midIndex = Math.floor(length / 2)
    let midVal = arr.splice(midIndex,1)[0]
    let left = []
    let right = []
     
    for(let i = 0; i<arr.length; i++){
        const n = arr[i]
        if(n<midVal){
            left.push(n)
        } else {
            right.push(n)
        }
    }

    return fastSort1(left).concat([midVal],fastSort1(right))

    //想象发生递归的函数，是最后几层递归环节的结果值
}

/**
 * 快排：slice
 * @param {array} arr 
 * @returns 
 */
function fastSort2(arr){

    const length = arr.length
    if(length<2) return arr

    let midIndex = Math.floor(length / 2)
    let midVal = arr.slice(midIndex,midIndex+1)[0]
    let left = []
    let right = []
     
    for(let i = 0; i<length; i++){
        if(i !== midIndex){
            const n = arr[i]
            if(n<midVal){
                left.push(n)
            } else {
                right.push(n)
            }
        }
    }

    return fastSort2(left).concat([midVal],fastSort2(right))

    //想象发生递归的函数，是最后几层递归环节的结果值
    // 调用栈最后几层，[x,x]开始排序，一层一层回到最外层，将完成排序
}

// 快排，slice逆序
function fastSort2(arr){

    const length = arr.length
    if(length<2) return arr

    let midIndex = Math.floor(length / 2)
    let midVal = arr.slice(midIndex,midIndex+1)[0]
    let left = []
    let right = []
     
    for(let i = 0; i<length; i++){
        if(i !== midIndex){
            const n = arr[i]
            if(n<midVal){
                right.push(n)
            } else {
                left.push(n)
            }
        }
    }

    return fastSort2(left).concat([midVal],fastSort2(right))

    //想象发生递归的函数，是最后几层递归环节的结果值
    // 调用栈最后几层，[x,x]开始排序，一层一层回到最外层，将完成排序
}

var testarr = [2,3,4,1,3,8,5,3,5,8,3,4,5,6,7,9,9,1,2,5,6]