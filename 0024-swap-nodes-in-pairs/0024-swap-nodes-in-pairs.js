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
var swapPairs = function(head) {
   if(!head || !head.next) return head;
//    let dummy = new ListNode();
//    dummy.next=head;
//    let prev = dummy;
//    let curr = head;
//    while(curr && curr.next){
//     let n = curr.next;
//     prev.next=n;
//     curr.next = n.next;
//     n.next = curr;
//     prev=curr;
//     curr=curr.next;
//    }
//    return dummy.next;


   let left = head;
   let right = head.next;
   let rightNext = right.next;
   right.next = left;
   left.next=swapPairs(rightNext);
   return right;
};