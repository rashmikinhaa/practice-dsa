/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let size = 0;
    let curr=head;
    while(curr != null){
        size++;
        curr=curr.next;
    }
    let mid = Math.floor(size/2);
    let midNode= head;
    for(let i=0;i<mid;i++){
        midNode=midNode.next;
    }
    return midNode;
};