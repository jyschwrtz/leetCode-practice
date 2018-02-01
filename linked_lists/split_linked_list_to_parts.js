/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    let result = new Array(k);
    let currentNode = root;
    let length = 0;
    while (currentNode !== null) {
        currentNode = currentNode.next;
        length += 1;
    }

    let splitLength;
    let additionalLength = 0;
    if (length < k) {
        splitLength = 1;
    } else if (length % k === 0) {
        splitLength = Math.floor(length / k);
    } else {
        splitLength = Math.floor(length / k);
        additionalLength = length % k;
    }

    let segmentLengths = [];
    for (let i = 0; i < k; i++) {
        if (additionalLength > 0) {
            segmentLengths[i] = splitLength + 1;
            additionalLength -= 1;
        } else {
            segmentLengths[i] = splitLength;
        }
    }

    currentNode = root;
    let splitListNode;

    for (let i = 0; i < k; i++) {
        let count = 0;
        while (count < segmentLengths[i]) {
            if (count > 0) {
                let newNode = new ListNode(currentNode.val);
                splitListNode.next = newNode;
                splitListNode = newNode;
                currentNode = currentNode.next;
            } else {
                if (currentNode) {
                    let newNode = new ListNode(currentNode.val);
                    result[i] = newNode;
                    splitListNode = newNode;
                    currentNode = currentNode.next;
                } else {
                    result[i] = null;
                }
            }
            count += 1;
        }
    }

    return result;
};
