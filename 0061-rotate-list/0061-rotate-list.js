/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }
  let length = 0;
  let curr = head;
  while(curr){
    length++;
    curr=curr.next;
  }  

  k = k%length;
  if (k === 0) return head;

  let start = head;
  let fast=head;
  let slow = head;
  for(let i=0;i<k;i++){
     fast = fast.next;
  }

  while(fast && fast.next){
    fast = fast.next;
    slow = slow.next;
  }

  let newHead = slow.next;
  fast.next = head;
  slow.next = null;

   return newHead;
};