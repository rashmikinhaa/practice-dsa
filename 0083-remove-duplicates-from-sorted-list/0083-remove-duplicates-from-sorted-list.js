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
var deleteDuplicates = function(head) {
    // let set = new Set();
    // let newList = new ListNode();
    // newList.next=head;

    // let curr = newList;
    // while(curr.next){
    //     if(set.has(curr.next.val)){
    //         curr.next=curr.next.next;
    //     }else{
    //         set.add(curr.next.val);
    //         curr=curr.next;
    //     }
    // }

    // return newList.next;

    let curr = head;
    while(curr && curr.next ){
        if(curr.val === curr.next.val){
            curr.next=curr.next.next;
        }else{
            curr=curr.next;
        }
    }
    return head;
};