/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    let first = l1;
    let second = l2;
    let carry=0;
     while (first || second || carry) {
        let a = first ? first.val : 0;
        let b = second ? second.val : 0;

        let sum = a + b + carry;

        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        curr.next = new ListNode(digit);
        curr = curr.next;

        if (first) first = first.next;
        if (second) second = second.next;
    }
    return dummy.next;
};