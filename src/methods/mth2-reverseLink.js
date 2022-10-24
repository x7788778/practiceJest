/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-09-19 14:41:30
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-09-30 21:49:46
 * @FilePath: /jest-test/src/methods/mthTwo-reverseLink.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 *       ===反转单向链表===
 */

// 首先创建一个链表， 数组转链表
// function createLinkList(arr){
//     let head = {val:arr[0],next:null}
//     let curNode = head
//     for(let i = 0 ; i <= arr.length; i++){
//         let val = arr[i+1]
//         tmpNode = {val:val,next:null}
//         curNode.next = tmpNode
//         curNode = curNode.next 
//     }

//     return head
// }
function createLinkList(arr){
    // 从末尾开始排比较方便
    let l = arr.length
    let curNode = {val:arr[l-1]} //首先拿到最后一个节点
    for(let i = l-2 ; i >= 0; i--){ // 倒序往前排，最后curNode将得到一个与数组顺序一致的链表
        curNode = {
            val:arr[i],
            next:curNode
        }
    }
    return curNode
}

function list2arr(list){
    let res = []
    while(list.next){
        res.push(list.val)
        list = list.next
    }
    res.push(list.val)
    return res
}

// 反转链表
// 其实写起来比较容易的是转成数组，将数组反转，再变成链表
// 不过下面做原地反转
function reverseListNode(list){
    debugger
   let pre,cur,next
   next = list
   
   while(next){
    // cur指向第一个节点时的next要清除，制造链表尾部
    if(cur && !pre) {
        delete cur.next
    }
    //反转指针
    if(cur && pre) {
        cur.next = pre
    }
    //整体后移指针
    pre = cur
    cur = next
    next = next?.next 
   }
   //链表末尾反转
   cur.next = pre

   return cur
}



// // 测试 arr2list
// let link1 = createLinkList([1,2,3])
// console.log(link1)

//测试 list2arr
let listParams = {val:1,next:{val:2,next:{val:3}}}
let list1 = list2arr(listParams)
console.log(list1,'链表转数组')

console.log('测试完毕')



// 拓展题问题： 链表与数组实现队列哪个性能好，  当然是链表

// 单项链表要使用tail入队，head出队，并且实时记录length长度

class myQeueu{
    head = null
    tail = null
    length = 0

    add(){

    }

    delete(){

    }
    // 使用get 可以myQueue.length直接调用
    get length(){
        return length
    }
}

