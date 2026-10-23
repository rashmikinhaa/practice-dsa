/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // let size = 0;
    // let sizeCurr = head;
    // while(sizeCurr){
    //     size++;
    //     sizeCurr = sizeCurr.next;
    // }
    // let currIndex = 0;
    // let deleteIndex = size - n;
    // let dummyNode = new ListNode(0);
    // dummyNode.next = head;

    // let curr = dummyNode;
    // for (let i = 0; i < deleteIndex; i++) {
    //     curr = curr.next;
    // }

    // curr.next = curr.next.next;

    // return dummyNode.next;

    let dummyNode = new ListNode(0);
    dummyNode.next = head;

    let slow = dummyNode;
    let fast = dummyNode;
    for(let i=0; i< n;i++){
        fast=fast.next;
    }

    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    slow.next=slow.next.next;
   
    return dummyNode.next;

};