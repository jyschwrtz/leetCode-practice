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
     if (head === null) {
         return result;
     }
     if (k < 2) {
         while (current.next !== null) {
             result.push(current.val);
             current = current.next;
         }
         result.push(current.val);
     } else {
         let i = 0;
         let j = 0;
         if (current.next === null) {
             result.push(current.val);
         } else {
             while (current.next !== null) {
                 let currentArr = [];
                 for (i = j; i < (j + k); i++) {

                      if (i === j + k - 1) {
                          currentArr.unshift(current.val);
                          currentArr.push(start.val);
                      } else if (current !== start) {
                          currentArr.push(current.val);
                      }

                      if (current.next !== null) {
                        current = current.next;
                      } else if ( i % k !== 0){
                        currentArr = [];
                          for (let n = j; n <= i; n++) {
                            currentArr.push(start.val);
                            start = start.next;
                            console.log(currentArr);
                          }
                          break;
                      }
                      console.log(currentArr);

                 }
                 if (current.next !== null) {
                      start = current;
                 }
                 result = result.concat(currentArr);
                 j = i + 1;
             }
         }
     }

     return result;
 };
