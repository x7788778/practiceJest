/*
 * 斐波那契数列
 * 0 1 1 2 3 5 8 13 21 34
 */
//
// function fibonacci(n){
//     if(n<=0) return 0
//     if(n===1) return 1
//     return fibonacci(n-1)+fibonacci(n-2)
// }

// 递归方式计算量太大，不可用


//使用循环的方式时间复杂度为o(n),可以随时记录上一个结果值
function fibonacci2(n){
    if(n<=0) return 0
    if(n===1) return 1

    let n1 = 1
    let n2 = 0 
    let res = 0
    //n1 n2 已经定义过第一个第二个数列了。 所以循环从2开始
    for(let i=2; i<=n; i++) {
        res = n1 + n2
        
        // 记录中间结果
        n2 = n1
        n1 = res
    }

    return res
}