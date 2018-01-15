/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
     let start = head;
     let current = head;
     let result = [];
     if (head === undefined) { return result; }
     if (k < 2) {
         while (current.next !== null) {
             result.push(current.val);
             current = current.next;
         }
         result.push(current.val);
     } else {
         let i = 0;
         let j = 0;
         while (current.next !== null) {
           let currentArr = [];
           start = current.next;
           for (i = j; i < j + k; i++) {
             if (current.next === null) {
               currentArr.unshift(start.val);
               currentArr.push(current.val);
               break;
             }

             if (i === j + k - 1) {
               currentArr.unshift(current.val);
               currentArr.push(start.val);
             } else {
               currentArr.push(current.val);
             }
             current = current.next;
           }
           result = result.concat(currentArr);
           j = i + 1;
         }

         result.push(current.val);
     }

     return result;
 };
