/**
 * 请说明 AJAX， Fetch， axios的区别
 * 
 * 
 */


/**
 * 用XMLHttpRequest 实现ajax
 * 
 * @param {string} url  api
 * 
 * @param {function} successFn  回调函数
 * 
 */
function ajax1 (url, successFn) {
    const xhr = new XMLHttpRequest() //
    xhr.open('GET',url,false) // false 代表用异步的方式
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                successFn(xhr.responseText)
            }
        }
    }

    xhr.send(null) //发送
}

/**
 * open(method,url,async) 
 * 	
 * 规定请求的类型、URL 以及是否异步处理请求。
 * 
 * method：请求的类型；GET 或 POST
 * 
 * url：文件在服务器上的位置
 * 
 * async：true（异步）或 false（同步）
 * 
 * 
 * send(string)
 * 将请求发送到服务器。
 * string：仅用于 POST 请求
 */