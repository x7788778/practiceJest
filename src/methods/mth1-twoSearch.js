/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-10-01 00:43:14
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-10-24 17:31:18
 * @FilePath: /jest-test/src/methods/mthOne-twoSearch.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @name ===二分查找===
 */


/**
 * @name 二分查找（循环）
 * 从一个数组中找到一个某一个值，
 * @param  arr  一个递增值的数组
 * @param target 其中一个值
 */
function banerySearch1(arr,target){
    var l = arr.length
    if(!arr.length) return -1

    let startIndex = 0
    let endIndex = length - 1
    
    while(startIndex <= endIndex){
        const midIndex = math.floor((startIndex + endIndex) / 2) //取中间值
        const midVal = arr[midIndex]
        if(target < midVal) { //说明值在左边
            endIndex = midIndex - 1
        } else if(target > midVal) { //说明值在右边
            starIndex = midIndex + 1
        } else { // 找到target
            return midIndex 
        }
    }

    return -1
}
/**
 * @name 二分查找（递归）
 * @param {arr} arr 
 * @param {number} target 
 * @param {number} startIndex 
 * @param {number} endIndex 
 */
function banerySearch2(arr,target,startIndex,endIndex){
    // 空数组的情况
    if(!arr.length) return -1
    // 没有传的情况
    if(startIndex == null) startIndex = 0
    if(endIndex == null) endIndex = arr.length - 1
    // 中间位置
    const midIndex = Math.floor((startIndex+endIndex)/2)
    const midVal = arr[midIndex]

    //相遇则证明没有找到
    if(startIndex > endIndex ) return - 1

    //开始查找
    if(target < midVal) {

        return banerySearch2(arr,target,startIndex,midIndex - 1)
    } else if(target > midVal) {
        return banerySearch2(arr,target,midIndex+1,endIndex)
    } else { //相等，返回index
        // console.log('匹配不到')
        return midIndex
    }

    
}