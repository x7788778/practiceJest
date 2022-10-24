/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-09-17 15:02:51
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-09-19 14:18:57
 * @FilePath: /jest-test/src/methods/methodsOne.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


/**
 * 两个栈实现一个队列
 * 
 * 拥有add,delete,length三个方法
 */

 class myQeueu {
    
    stack1 = []
    stack2 = []

    // 入队
    add(val){
        this.stack1.push(val)
    }
    // 出队
    delete(){
        let deleteVal = null
        while(this.stack1.length > 0) {
            let tmpval = this.stack1.pop()
            this.stack2.push(tmpval)
        }
        deleteVal = this.stack2.pop()

        while(this.stack2.length > 0) {
            let tmpval = this.stack2.pop()
            this.stack1.push(tmpval)
        }

        return deleteVal || null
    }

    get length(){
        return this.stack1.length
    }
}

// 功能测试
const queOne = new myQeueu()
queOne.add(1)
queOne.add(2)
queOne.add(3)
queOne.add(4)
queOne.add(5)

console.info(queOne.length)
console.info(queOne.stack1,queOne.stack2,'队列情况')

setTimeout(()=>{
    queOne.delete()
    queOne.delete()
    console.info(queOne.stack1,queOne.stack2,'队列情况')
},2000)

