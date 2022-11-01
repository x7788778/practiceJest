/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-10-27 14:01:05
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-11-01 23:05:40
 * @FilePath: /jest-test/src/methods/baseQustion/debounce.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 防抖
function debounce1(fn, wait){
 let timer = null
 return function(){
    if(timer) { //多次触发，
        clearTimeout(timer)
    } else {
        timer = setTimeout(()=>{
            fn.aplly(this, arguments)
            timer = null
        },wait)
    }
    // fn.apply(this, arguments)
 }
}


//截流
function throttle1(fn, wait = 100){
    let timer = null 
    
    return function (){
        if(timer) return

        timer = setTimeout(()=>{
            fn.aplly(this, arguments)
            timer = null
        },wait)
    }

}

