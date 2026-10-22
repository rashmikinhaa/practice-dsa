/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let currTwo = headB;
    let seenSet = new Set();
    while(currTwo){
        seenSet.add(currTwo);
        currTwo = currTwo.next;
    }

    let currOne = headA;
    while(currOne){
       if(seenSet.has(currOne)){
         return currOne;
       }
       currOne = currOne.next; 
    }
    return null;
};