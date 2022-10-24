/*
 * @Author: zhaogang 156606672@qq.com
 * @Date: 2022-10-02 16:38:59
 * @LastEditors: zhaogang 156606672@qq.com
 * @LastEditTime: 2022-10-08 10:31:48
 * @FilePath: /jest-test/src/methods/mth4-treeNode.js
 * @Description: 搜索二叉树
 */



var baseNode = {
    value:1,
    left: {
        value:2,
        left: {
            value:4,
            left:{
                value:4.1,
                left:{
                    value:4.2,
                    left:null,
                    right:null,
                },
                right:null,
            },
            right:null,
        },
        right:{
            value:5,
            left:null,
            right:null,
        }
    },
    right:{
        value:3,
        left: {
            value:6,
            left:null,
            right:null,
        },
        right:{
            value:7,
            left:null,
            right:null,
        }
    }
}
// 二叉树遍历， 前序，中序，后续遍历
function inOrderTraverse(node){
    if(node == null) return
    inOrderTraverse(node.left)
    console.log(node.value)
    inOrderTraverse(node.right)
}

/**
 * 习题： 寻找第k小值
 * @param {object} tree 
 * @param {number} k 
 */
function findSomeValue(tree,k){

}


