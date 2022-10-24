/*
 * 
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　　　┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　┏━┛
 *      ┃　　　┃　
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug　　
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 */

/**
 * @name 移动0到末尾，其余顺序不动 （原数组进行）
 * @param {Array} arr
 * 考虑使用双指针，类似排序算法，时间复杂度on
 * 
 */
function move0(arr){
    let l = arr.length
    if(l === 0) return 

    let i //指向0后的非0
    let j = -1 //指向第一个0
    for(let i = 0; i <l ;i++){

        if(arr[i] ===0){ // 找到第一个0
            if(j<0){
                j = i
            }
        }

        if(arr[i]!==0 && j >= 0){ 
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            j++
        }
    }

    // 开始可能会有一些想不清楚，  当一次交换之后，j++，始终指向第一个0. 而i会在一次遍历种找到每一个非0与这个第一个o（j）交换。  没有问题
}


/**
 * @name 移动0到末尾，其余顺序不动 （非原数组进行）
 * @param {Array} arr
 * 考虑使用双指针，类似排序算法，时间复杂度on
 * 
 */

function move0two(arr){
    let zero = []
    let other = []
    let l = arr.length
    if(l === 0) return arr

    for(let i = 0; i<l; i++ ){
        if(arr[i]===0){
            zero.push(arr[i])
        } else {
            other.push(arr[i])
        }
    }

    return other.concat(zero)
}

/**
 * 字符串中寻找出现次数最多的字符 
 * @param {string} str 
 * 返回字符和次数
 * 传统思路：嵌套循环
 */
function findmaxTimeInStr(str){
    let l = str.length
    
    let newMaxVal = ''
    let oldMaxVal = ''
    let maxTime = 0
    for(let i = 0; i< l; i++){

    }
}





