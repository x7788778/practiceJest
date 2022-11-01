/**
 * 千分位格式化
 * 将千分位数字格式化，输出一个字符串
 * 输出数字12121212，输出，12，050，100
 * （注意：逆序判断，就是倒序循环）
 */


/**
 * 
 * 思路1: 转化为数组， reverse，每三位拆分
 * 数组
 * */

//数组
function format1(num){
    let res = Math.floor(num).toString().split('').reverse() //拿到整数,转成逆序数组

    // 注意前面reverse反转过来的目的是为了字符串从右往左拼字符串
    let ress = res.reduce((pre,cur,idx)=>{
        if(idx % 3 === 0) {
            if(pre){
                return cur+','+pre
            } else {
                return cur
            }
            
        }else{
            return cur + pre
        }
    },'')

    return ress

}
//字符串
function formart2(num){
    let res = num + ''
    let l = res.length
    let count = 0

    let ress = ''
    for(let i = l-1; i>=0; i--){
        let j = l - i
        if(j%3 === 0 && i !== 0){
            if(ress){
               ress =  ',' + res[i] + ress
            } else {
               ress =  res[i] + ''
            }
        }else {
            ress = res[i] + ress
        }
    }

    return ress
}

//思路2：正则  //面试不要用，效率低




/**
 * 小结：计算机能简单就别复杂
 * 能不用语法糖就不用，能不变换类型，或少用才能做算法，就不用
 */